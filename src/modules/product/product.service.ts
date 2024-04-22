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
import {  isArray } from 'class-validator';

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
  console.log(createProductDto.categories);
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
const categories = isArray(query.category) ? query.category : [query.category];
const character = Number(query.character) || "";
const brand = Number(query.brand) || "";
const series = Number(query.series) || "";
const page = Number(query.page) || 1;
const limit = Number(query.limit) || 10;
const skip = (Number(page) - 1) * Number(limit);
console.log(limit);



let products = [];
    for (let i = 0; i < categories.length; i++) {
      const element = Number(categories[i]) || '';
      const res = await this.productRepository
        .createQueryBuilder('product')
        .leftJoinAndSelect('product.character', 'characters')
        .leftJoinAndSelect('product.categories', 'categories')
        .leftJoinAndSelect('product.brand', 'brand')
        .leftJoinAndSelect('product.series', 'series')
        .where('product.name LIKE :name', { name: `%${keyword}%` })
        .select([
         'product',
         'categories.category_id',
         'categories.name',
         'characters.character_id',
         'characters.name',
         'brand.brand_id',
         'brand.name',
         'series.seri_id',
         'series.name',
        ])
      .andWhere('characters.character_id LIKE :character', { character: `%${character}%` })
      .andWhere('brand.brand_id LIKE :brand', { brand: `%${brand}%` })
      .andWhere('series.seri_id LIKE :series', { series: `%${series}%` })
      .andWhere('categories.category_id LIKE :element', { element: `%${element }%` })
      .orderBy('product.product_id', 'ASC')
      .skip(skip)
      .take(limit)
      .getMany();
    if (res) {
      products = products.concat(res);
    }
    }
    products = (products.filter((v, i, a) => a.findIndex(t => (t.product_id === v.product_id)) === i)); 



const lastPage = Math.ceil(products.length / limit);
const nextPage = page + 1 > lastPage ? null : page + 1;
const prevPage = page - 1 < 1 ? null : page - 1;
return { data: products, currenPage: page, total: products.length, nextPage, prevPage, lastPage };
  }
 async findOne(id: number) {
    const data = await this.productRepository
      .createQueryBuilder('product')
      .leftJoinAndSelect('product.character', 'characters')
      .leftJoinAndSelect('product.categories', 'categories')
      .leftJoinAndSelect('product.brand', 'brand')
      .leftJoinAndSelect('product.series', 'series')
      .where('product.product_id = :id', { id })
      .select([
       'product',
       'categories.category_id',
       'categories.name',
       'characters.character_id',
       'characters.name',
       'brand.brand_id',
       'brand.name',
       'series.seri_id',
       'series.name',
      ])
      .getMany();
    return data;
  }
  async update(id: number, updateProductDto: UpdateProductDto) {
    const product = await this.productRepository.findOne({ where: { product_id: id } });
    if (!product) {
      throw new HttpException('Không tìm thấy sản phẩm', HttpStatus.BAD_REQUEST);
    }
    let categories =[]
    for (let i = 0; i < updateProductDto.categories.length; i++) {
      const element = Number(updateProductDto.categories[i]) || '';
      const res = await this.categoryRepository.findOne({ where: { category_id: element } });
      categories.push(res);
    }
     await this.productRepository.save({ ...product, ...updateProductDto ,categories});
     return new HttpException('Cập nhật thành công', HttpStatus.OK); 
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
