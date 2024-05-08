import { create } from 'domain';
import { query } from 'express';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from '../databases/product.entity';
import { CharacterEntity } from '../databases/character.entity';
import { BrandEntity } from '../databases/brand.entity';
import { SeriesEntity } from '../databases/series.entity';
import { CategoryEntity } from '../databases/category.entity';
import { SaleEntity } from '../databases/sale.entity';
import { FilterProductDto } from './dto/filter-product.dto';
import {  isArray, isEmpty } from 'class-validator';
import { DeleteResult, In } from 'typeorm';

@Injectable()
export class ProductService {
  constructor (
    @InjectRepository(ProductEntity) private  productRepository: any,
    @InjectRepository(CharacterEntity) private  characterRepository: any,
    @InjectRepository(BrandEntity) private  brandRepository: any,
    @InjectRepository(SeriesEntity) private  seriesRepository: any,
    @InjectRepository(CategoryEntity) private  categoryRepository: any,
 ) {}
 async create(createProductDto: CreateProductDto) {
  if (await this.checkName(createProductDto.name)) {
    throw new HttpException('Sản phẩm đã tồn tại', HttpStatus.BAD_REQUEST);
  }
  let categories =[]
  for (let i = 0; i < createProductDto.categories.length; i++) {
    const element = Number(createProductDto.categories[i]) || '';
    const res = await this.categoryRepository.findOne({ where: { category_id: element } });
    categories.push(res);
  }
  const newProcucts = this.productRepository.create({
    ...createProductDto,categories});
   await this.productRepository.save(newProcucts)
   throw new HttpException('Thêm mới thành công', HttpStatus.OK);
  }
// Validate
 async checkName(name: string) {
  const product = await this.productRepository.findOne({ where: { name } });
  if (product) {
    return true;
  }
  return false;
}
 async findAll(query:FilterProductDto) {
  const keyword = query.search || '';
let categories = isArray(query.categories) ? query.categories: [query.categories];
if (!categories[0] || categories.length == 0) {
  categories = []
}

const character = query.characters || "";
const brand = query.brands || "";
const series = query.series || "";
const page = Number(query.page) || 1;
const limit = Number(query.limit) || 10;
const skip = (Number(page) - 1) * Number(limit);
const status = query.status || 1;
// console.log("-------->",query);

// console.log(limit);



// let products = [];
//     for (let i = 0; i < categories.length; i++) {
//       const element = Number(categories[i]) || '';
//       const res = await this.productRepository
//         .createQueryBuilder('product')
//         .leftJoinAndSelect('product.character', 'characters')
//         .leftJoinAndSelect('product.categories', 'categories')
//         .leftJoinAndSelect('product.brand', 'brand')
//         .leftJoinAndSelect('product.series', 'series')
//         .where('product.name LIKE :name', { name: `%${keyword}%` })
//         .select([
//          'product',
//          'categories.category_id',
//          'categories.name',
//          'characters.character_id',
//          'characters.name',
//          'brand.brand_id',
//          'brand.name',
//          'series.series_id',
//          'series.name',
//         ])
//       .andWhere('characters.character_id LIKE :character', { character: `%${character}%` })
//       .andWhere('brand.brand_id LIKE :brand', { brand: `%${brand}%` })
//       .andWhere('series.series_id LIKE :series', { series: `%${series}%` })
//       .andWhere('categories.category_id LIKE :element', { element: `%${element }%` })
//       .orderBy('product.product_id', 'ASC')
//       .skip(skip)
//       .take(limit)
//       .getMany();
//     if (res) {
//       products = products.concat(res);
//     }
//     }
//     products = (products.filter((v, i, a) => a.findIndex(t => (t.product_id === v.product_id)) === i)); 
let data = await this.productRepository.createQueryBuilder('product')
  .leftJoinAndSelect('product.character', 'characters')
  .leftJoinAndSelect('product.brand', 'brand')
  .leftJoinAndSelect('product.series', 'series')
  .leftJoinAndSelect('product.categories', 'categories')
  .select([
    'product',
    'categories.category_id',
    'categories.name',
           'characters.character_id',
           'characters.name',
            'brand.brand_id',
           'brand.name',
            'series.series_id',
             'series.name',
  ])
  .where('product.name LIKE :name', { name: `%${keyword}%` })
  .andWhere('characters.character_id LIKE :characters', { characters: `%${character}%` })
  .andWhere('brand.brand_id LIKE :brands', { brands: `%${brand}%` })
  .andWhere('series.series_id LIKE :series', { series: `%${series}%` })
  // .andWhere('categories.category_id IN (:...categories)', { categories })
  .skip(skip)
  .take(limit)
  if (query.categories) {
    data = data
    .where('categories.category_id IN (:...categories)', { categories })
    .select([
      'product',
      'categories.category_id',
      'categories.name',
      'characters.character_id',
      'characters.name',
      'brand.brand_id',
      'brand.name',
      'series.series_id',
      'series.name',
    ])
  }
  const [docs, total] = await data.orderBy('product.product_id', 'DESC').getManyAndCount();
    return {docs,total};
  }
 async findOne(id: number) {
 const data = await this.productRepository.createQueryBuilder('product')
  .leftJoinAndSelect('product.character', 'characters')
  .leftJoinAndSelect('product.brand', 'brand')
  .leftJoinAndSelect('product.series', 'series')
  .leftJoinAndSelect('product.categories', 'categories')
  .select([
    'product',
    'categories.category_id',
    'categories.name',
    "characters.character_id",
    'characters.name',
    'brand.name',
    'brand.brand_id',
    'series.name',
    'series.series_id',
  ])
  .where('product.product_id = :id', { id })
  .getOne();
  
    if (!data) {
      throw new HttpException('Không tìm thấy sản phẩm', HttpStatus.BAD_REQUEST);
    }
    return data;
  }
  async update(id: number, updateProductDto: UpdateProductDto) {
    const product = await this.productRepository.findOne({ where: { product_id: id } });
    if (!product) {
      throw new HttpException('Không tìm thấy sản phẩm', HttpStatus.BAD_REQUEST);
    }
    // let categories =[]
    // for (let i = 0; i < updateProductDto.categories.length; i++) {
    //   const element = Number(updateProductDto.categories[i]) || '';
    //   const res = await this.categoryRepository.findOne({ where: { category_id: element } });
    //   categories.push(res);
    // }
    await this.productRepository.update({ product_id: id }, { ...updateProductDto });
     return new HttpException('Cập nhật thành công', HttpStatus.OK); 
  }
  async multipleDelete(ids: string[]): Promise<DeleteResult> {
    return await this.productRepository.delete({ product_id: In(ids) })
}
  async remove(id: number) {
   const product = await this.productRepository.findOne({ where: { product_id: id } });
    if (!product) {
      throw new HttpException('Không tìm thấy sản phẩm', HttpStatus.BAD_REQUEST);
    }
   this.productRepository.remove(product);
   return new HttpException('Xóa thành công', HttpStatus.OK);
  }
}
