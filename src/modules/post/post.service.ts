import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostEntity } from '../databases/post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { FilterPostDto } from './dto/filter-post.dto';
import { Like } from 'typeorm';

@Injectable()
export class PostService {
  constructor( 
    @InjectRepository(PostEntity) private postRepository: any
  ) {}
  async create(createPostDto: CreatePostDto) {
    const checkTitle = await this.postRepository.findOne({ where: { name: createPostDto.title } });
    if (checkTitle)  {
      throw new HttpException('Bài đăng đã tồn tại', HttpStatus.BAD_REQUEST);
    }
    const category = this.postRepository.create(createPostDto);
    await this.postRepository.save(category);
    throw new HttpException('Thêm mới thành công', HttpStatus.OK);
  }

  async findAll(query: FilterPostDto) {
    const keyword = query.title || '';
    const user = query.user || '';
    const limit = query.limit || 10;
    const page = query.page || 1;
    const skip = (Number(page) - 1) * Number(limit);
    const [res, total] = await this.postRepository.findAndCount({
      relations: {
        user: true,
    },
      where: [{ name: Like(`%${keyword}%`), user:Like(`%${user}%`)}],
      select: ['category_id', 'name', 'status', 'created_at', 'updated_at'],
      order: { created_at: 'DESC' },
      take: Number(limit),
      skip: Number(skip)
    });
    const lastPage = Math.ceil(total / Number(limit));
    const nextPage = Number(page) + 1 > lastPage ? null : Number(page) + 1;
    const prevPage = Number(page) - 1 < 1 ? null : Number(page) - 1;
    return { data: res, currenPage: Number(page), total, nextPage, prevPage, lastPage };
  } 

  async findOne(id: number) {
    const post = await this.postRepository.findOne({ where: { post_id: id } });
    if (!post) {
      throw new HttpException('Không tìm thấy bài đăng', HttpStatus.NOT_FOUND);
    }
    return post;
  }

 async update(id: number, updatePostDto: UpdatePostDto) {
    const post = await this.postRepository.findOne({ where: { post_id: id } });
    if (!post) {
      throw new HttpException('Không tìm thấy bài đăng', HttpStatus.NOT_FOUND);
    }
    await this.postRepository.update({ post_id: id }, updatePostDto);
    throw new HttpException('Cập nhật thành công', HttpStatus.OK);
  }

  remove(id: number) {
    const post = this.postRepository.findOne({ where: { post_id: id } });
    if (!post) {
      throw new HttpException('Không tìm thấy bài đăng', HttpStatus.NOT_FOUND);
    }
    this.postRepository.remove(post);
    throw new HttpException('Xóa thành công', HttpStatus.OK);
  }
}
