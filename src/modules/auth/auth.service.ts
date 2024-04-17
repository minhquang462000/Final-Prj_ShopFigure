import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../user/database/user.entity';
import { genSaltSync, hashSync ,compareSync} from 'bcrypt';
import { RegisterUserDto } from './dto/register-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import {JwtService} from '@nestjs/jwt'
import { Repository } from 'typeorm';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
 constructor (
  @InjectRepository(UserEntity) private userRepository: Repository<UserEntity>,
  private jwtService: JwtService,
  private configService: ConfigService
 ) {}

async login(loginUserDto: LoginUserDto) {

  try {
    const user = await this.userRepository.findOne({ where: { email: loginUserDto.email } });
    if (!user) {
      throw new Error('Email không tồn tại');
    }
    if (!await this.comparePassword(loginUserDto.password, user.password)) {
      throw new Error('Password không đúng');
    }
    const payload = { id: user.user_id, email: user.email };
    return await this.generateToken(payload);
   
  } catch (e) {
    return e.message
  }
}
async register(registerUserDto: RegisterUserDto) {
 try {
  const hashPassword = await this.hashPassword(registerUserDto.password);
  if (await this.checkEmail(registerUserDto.email)) {
    throw new Error('Email đã đăng ký');
    
  }
  if (await this.checkUsername(registerUserDto.name)) {
    throw new Error('Username đã đăng ký');
  }
  registerUserDto.password = hashPassword;
  console.log(registerUserDto);
  
   await this.userRepository.save({...registerUserDto,refresh_token: 'test-token',password: hashPassword});
   return 'Đăng ký thành công'
 } catch (e) {
  return e.message
 }
}
async checkEmail(email: string) {
  const user = await this.userRepository.findOne({ where: { email } });
  if (user) {
    return true;
  }
  return false;
}
// check username
async checkUsername(name: string) {
  const user = await this.userRepository.findOne({ where: { name } });
  if (user) {
    return true;
  }
  return false;
}
private async hashPassword(password: string):Promise<string> {
const saltRounds = 10;
const salt  = await genSaltSync(saltRounds);
const hash =  await hashSync(password, salt);
return hash;
}
// compare password
private async comparePassword(password: string, hash: string):Promise<boolean> {
 const match = await compareSync(password, hash);
 return match
} 
// Generate token and refresh token
private async generateToken(payload: {id:number,email:string}) {
  const accessToken = await this.jwtService.sign(payload);
  const refresh_token = await  this.jwtService.signAsync(payload, { secret: this.configService.get<string>('SECRET'), expiresIn: this.configService.get<string>('EXP_IN_REFRESH_TOKEN') });
 await this.userRepository.update({ email: payload.email }, { refresh_token });
 return { accessToken, refresh_token };
}
async refreshToken(refresh_token: string) {
  try {
    const user = await this.jwtService.verifyAsync(refresh_token, { secret: this.configService.get<string>('SECRET') });
    const payload = { id: user.id, email: user.email };
    const checkExistToken = await this.userRepository.findOne({ where: { email: user.email, refresh_token: refresh_token } });
    if (!checkExistToken) {
      throw new Error('Refresh token khong hop le');
    }
    return await this.generateToken({id: user.id, email: user.email});
   
  } catch (e) {
    return e.message
  }
}
}
