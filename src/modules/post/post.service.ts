import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostEntity } from './database/post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { UserEntity } from '../user/database/user.entity';
import { FilterPostDto } from './dto/filter -post.dto';
import { CharacterEntity } from '../character/database/character.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(UserEntity) private  userRepository: Repository<UserEntity>,
    @InjectRepository(PostEntity) private  postRepository: Repository<PostEntity>,
    @InjectRepository(CharacterEntity) private  characterRepository: Repository<CharacterEntity>,
  ) {}
 async  create(id: number, createPostDto: CreatePostDto) {
   const user = await this.userRepository.findOneBy({ user_id: id });
   
   let character =[]
   for (let i = 0; i <createPostDto.characters.length; i++) {
    const element = createPostDto.characters[i];
    const char = await this.characterRepository.findOneBy({ character_id: Number(element) });
    if (char != null) {
      character.push(char)
    }
   }
   try {
   const post = new PostEntity();
   post.title = createPostDto.title;
   post.user = user;
   post.categories = createPostDto.categories;
   post.description = createPostDto.description;
   post.thumbnail = createPostDto.thumbnail;
   post.status = createPostDto.status;
   post.characters = character
   await this.postRepository.save(post);
   return 'Create post successfully';
   } catch (e) {
   return e.message
   }
  }

  async findAll(query:FilterPostDto) {
    const character = Number(query.character) || '';

    const keyword = query.search || '';
   const limit = Number(query.limit) || 10;
   const page = query.page || 1;
   const category = Number(query.category) || '';
    const skip = (Number(page) - 1) * Number(limit);
  //   const [res, total] = await this.postRepository.findAndCount({
  //    where: [{ title: Like(`%${keyword}%`) ,categories:Like(`%${category}%`)}],
  //    relations: { user: true,categories:true ,characters:true},
  //    select:{
  //     characters:{
  //       character_id:true,
  //       name:true
  //     },
  //     categories:{
  //       category_id:true,
  //       name:true,
  //       description:true
  //     },
  //     user:{
  //      user_id:true,
  //      name:true,
  //      email:true,
  //      avatar:true

  //    }},
  //    order:{created_at:"DESC"},
  //    take: Number(limit),
  //    skip: Number(skip)

  // })
  const [res, total] = await this.postRepository.createQueryBuilder('post')
  .leftJoinAndSelect('post.user', 'user')
  .leftJoinAndSelect('post.categories', 'categories')
  .leftJoinAndSelect('post.characters', 'characters')
  .select([
    'post',
    'user.user_id',
    'user.name',
    'user.email',
    'user.avatar',
    'categories.category_id',
    'categories.name',
    'categories.description',
    'characters.character_id',
    'characters.name'
  ])
  .where('post.title LIKE :title', { title: `%${keyword}%` })
.andWhere('categories.category_id LIKE :category', { category: `%${category}%` })
.andWhere('characters.character_id LIKE :character', { character: `%${character}%`})
  .orderBy('post.created_at', 'DESC')
  .skip(skip)
  .take(limit)
  .getManyAndCount();
const lastPage = Math.ceil(total / Number(limit));
const nextPage = Number(page) + 1 > lastPage ? null : Number(page) + 1;
const prevPage = Number(page) - 1 < 1 ? null : Number(page) - 1;
  return {data:res,currenPage:Number(page),total,nextPage,prevPage,lastPage}; 
}
 async findOne(id: number) {
   const res = await this.postRepository.findOne({ where: { post_id: id },relations:{user:true}, 
     select:{user:{
    user_id:true,
    name:true,
    email:true,
    avatar:true

  }}, });
    return res;
  }
  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
