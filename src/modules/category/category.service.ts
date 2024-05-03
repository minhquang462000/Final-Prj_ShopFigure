import { HttpException, HttpStatus, Injectable, Delete } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity } from '../databases/category.entity';
import { DeleteResult, In, Like } from 'typeorm';
import { FilterBrandDto } from '../brand/dto/filter-brand.dto';

@Injectable()
export class CategoryService {
  constructor( 
    @InjectRepository(CategoryEntity) private categoryRepository: any
  ) {}
  async create(createCategoryDto: CreateCategoryDto) {
    const checkName = await this.categoryRepository.findOne({ where: { name: createCategoryDto.name } });
    if (checkName) {
      throw new HttpException('Danh mục đã tồn tại', HttpStatus.BAD_REQUEST);
    }
    const category = this.categoryRepository.create(createCategoryDto);
    await this.categoryRepository.save(category);
    throw new HttpException('Thêm mới thành công', HttpStatus.OK);
  }
  async multipleDelete(ids: string[]): Promise<DeleteResult> {
    return await this.categoryRepository.delete({ category_id: In(ids) })
}
  async findAll(query: FilterBrandDto) {
    const keyword = query.name || '';
    const limit = query.limit || 10;
    const page = query.page || 1;
    const skip = (Number(page) - 1) * Number(limit);
    const [res, total] = await this.categoryRepository.findAndCount({
      where: [{ name: Like(`%${keyword}%`) }],
      select: ['category_id', 'name', 'status', 'created_at', 'updated_at', 'thumbnail', 'description'],
      order: { created_at: 'DESC' },
      take: Number(limit),
      skip: Number(skip)
    });
    const lastPage = Math.ceil(total / Number(limit));
    const nextPage = Number(page) + 1 > lastPage ? null : Number(page) + 1;
    const prevPage = Number(page) - 1 < 1 ? null : Number(page) - 1;
    return { data: res, currenPage: Number(page), total, nextPage, prevPage, lastPage };
  } 
async findAllCategory() {
  const category = await this.categoryRepository.find({
    select: ['category_id', 'name'],
  where: { status: 1 },});
  if (!category) {
    throw new HttpException('Không tìm thấy danh mục', HttpStatus.BAD_REQUEST);
  }
  return category;
}
  async findOne(id: number) {
    const category = await this.categoryRepository.findOne({ where: { category_id: id } });
    if (!category) {
      throw new HttpException('Không tìm thấy danh mục', HttpStatus.BAD_REQUEST);
    }
    return category;
  }

  async update(id: number, updateCategoryDto: any) {
    const category = await this.categoryRepository.findOne({ where: { category_id: id } });
    if (!category) {
      throw new HttpException('Không tìm thấy danh mục', HttpStatus.BAD_REQUEST);
    }
    await this.categoryRepository.update({ category_id: id }, updateCategoryDto);
    throw new HttpException('Cập nhật thành công', HttpStatus.OK);
  }

  async remove(id: number) {
    const  category = await this.categoryRepository.findOne({ where: { category_id: id } });
    if (!category) {
      throw new HttpException('Không tìm thấy danh mục', HttpStatus.BAD_REQUEST);
    }
    await this.categoryRepository.remove(category);
    throw new HttpException('Xóa thành công', HttpStatus.OK);
  }
}
