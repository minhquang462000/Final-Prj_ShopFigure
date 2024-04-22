import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BrandEntity } from '../databases/brand.entity';
import { query } from 'express';
import { FilterBrandDto } from './dto/filter-brand.dto';
import { Like } from 'typeorm';

@Injectable()
export class BrandService {
  constructor(
    @InjectRepository(BrandEntity) private brandRepository: any
  ) { }
  async create(createBrandDto: any) {
    const checkName = await this.brandRepository.findOne({ where: { name: createBrandDto.name } });
    if (checkName) {
      throw new HttpException('Tên đã tồn tại', HttpStatus.BAD_REQUEST);
    }
   const brand = this.brandRepository.create(createBrandDto);
   await await this.brandRepository.save(brand);
   throw new HttpException('Thêm mới thành công', HttpStatus.OK);
  }

  async findAll(query: FilterBrandDto) {
    const keyword = query.name || '';
    const limit = query.limit || 10;
    const page = query.page || 1;
    const skip = (Number(page) - 1) * Number(limit);
    const [res, total] = await this.brandRepository.findAndCount({
      where: [{ name: Like(`%${keyword}%`) }],
      select: ['brand_id', 'name', 'status', 'created_at', 'updated_at'],
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
    const brand = await this.brandRepository.findOne({ where: { brand_id: id } });
    return brand
  }

 async update(id: number, updateBrandDto: any) {
    const brand = await this.brandRepository.findOne({ where: { brand_id: id } });
    if (!brand) {
      throw new HttpException('Không tìm thấy thương hiệu', HttpStatus.BAD_REQUEST);
    }
    await this.brandRepository.save({ ...brand, ...updateBrandDto });
    throw new HttpException('Cập nhật thành công', HttpStatus.OK);
  }

 async remove(id: number) {
   const  brand = await this.brandRepository.findOne({ where: { brand_id: id } });
   if (!brand) {
     throw new HttpException('Không tìm thấy thương hiệu', HttpStatus.BAD_REQUEST);
   }
   await this.brandRepository.remove(brand);
   throw new HttpException('Xóa thành công', HttpStatus.OK);
  }
}
