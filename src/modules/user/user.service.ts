
import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserEntity } from '../databases/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
import { FilterUserDto } from './dtos/filter.dto';
import { take } from 'rxjs';
import { DeleteResult, In, Like } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: any,
  ) {}
  async create(createUserDto: any) {
   if (await this.checkEmail(createUserDto.email)) {
        throw new HttpException('Email đã đăng ký', HttpStatus.BAD_REQUEST);
      }
      if (await this.checkUsername(createUserDto.name)) {
      throw new HttpException('Username đã đăng ký', HttpStatus.BAD_REQUEST);
      }
   const user = this.userRepository.create(createUserDto);
   await this.userRepository.save(user);
     throw new HttpException('Ok baby', HttpStatus.OK);
  }
  // check role
  // check email
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
  async findAll(query:FilterUserDto) {
    const keyword = query.search || '';
   const limit = query.limit || 10;
   const page = query.page || 1;
   const status = query.status || 1;
   const role = query.role || 1;
    const skip = (Number(page) - 1) * Number(limit);
    const [docs, total]= await this.userRepository.createQueryBuilder('user')
        .where('user.name like :name',{name:`%${keyword}%`})
        .select(['user.user_id', 'user.name', 'user.email', 'user.role', 'user.status', 'user.created_at', 'user.updated_at','user.avatar','user.address','user.phone','user.gender',"created_at","updated_at"])
        .andWhere('user.role = :role',{role:Number(role)})
        .andWhere('user.status = :status',{status:Number(status)})
        .skip(skip)
        .take(limit)
        .orderBy('user.created_at','DESC')
        .getManyAndCount()
        return {docs,total}
}
  // async findOne(id: number) {
  //   const data = await this.userRepository.findOne({
      
  //     where: { user_id: id },
  //     select: ['user_id', 'name', 'email', 'role', 'status', 'created_at', 'updated_at','avatar','address','phone','gender'],
  //   });
  //   return data;
  // }
  async findOne(id: number) {
    const data = await this.userRepository.createQueryBuilder('user')
    .leftJoinAndSelect('user.cart', 'cart')
    .where('user.user_id = :id', {id: id})
    .select(['user.user_id',"user.cart", 'user.name', 'user.email', 'user.role', 'user.status', 'user.created_at', 'user.updated_at','user.avatar','user.address','user.phone','user.gender'])
    .getOne();
    return data;
  }
// Upload Avatar
async updateAvatar(id: number, avatar: string):Promise<any> {
  await this.userRepository.update({ user_id: id }, { avatar });
  
  return 'upload avatar ok';
}
  async update(id: number, updateUserDto: any) {
    await this.userRepository.update({ user_id: id }, updateUserDto);
    return 'update OK';
  }

  async multipleDelete(ids: string[]): Promise<DeleteResult> {
    return await this.userRepository.delete({ user_id: In(ids) })
}
  async remove(id: number) {
    await this.userRepository.delete({ user_id: id });
    return 'remove OK';
  }
}
