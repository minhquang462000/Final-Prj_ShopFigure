
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserEntity } from './database/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
import { FilterUserDto } from './dtos/filter.dto';
import { take } from 'rxjs';
import { Like } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: any,
  ) {}
  async create(createUserDto: CreateUserDto) {
    try {
      if (await this.checkEmail(createUserDto.email)) {
        throw new Error('Email đã tồn tại');
      }
      if (await this.checkUsername(createUserDto.name)) {
        throw new Error('Username đã tồn tại');
      }

      const user = new UserEntity();
      user.name = createUserDto.name;
      user.status = createUserDto.status;
      user.email = createUserDto.email;
      user.role = createUserDto.role;
      user.password = createUserDto.password;

      await this.userRepository.save(user);
      return 'Ok baby';
    } catch (e) {
      return e.message;
    }
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
    const skip = (Number(page) - 1) * Number(limit);
    const [res, total] = await this.userRepository.findAndCount({
     where: [{ name: Like(`%${keyword}%`) }, { email: Like(`%${keyword}%`) },{status:Like(`%${keyword}%`)}],
     select: ['user_id', 'name', 'email', 'status', 'role', 'created_at', 'updated_at'],
     order:{created_at:"DESC"},
     take: Number(limit),
     skip: Number(skip)

  })
const lastPage = Math.ceil(total / Number(limit));
const nextPage = Number(page) + 1 > lastPage ? null : Number(page) + 1;
const prevPage = Number(page) - 1 < 1 ? null : Number(page) - 1;
  return {data:res,currenPage:Number(page),total,nextPage,prevPage,lastPage}; 
}
  async findOne(id: number) {
    const data = await this.userRepository.findOne({
      where: { user_id: id }
    });
    return data;
  }
//Upload Avatar
async updateAvatar(id: number, avatar: string):Promise<any> {
  await this.userRepository.update({ user_id: id }, { avatar });
  
  return 'upload avatar ok';
}
  async update(id: number, updateUserDto: any) {
    await this.userRepository.update({ user_id: id }, updateUserDto);
    return 'update OK';
  }

  async remove(id: number) {
    await this.userRepository.delete({ user_id: id });
    return 'remove OK';
  }
}
