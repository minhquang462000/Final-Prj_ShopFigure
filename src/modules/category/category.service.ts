import { HttpException, HttpStatus, Injectable, Delete } from '@nestjs/common'
import { CreateCategoryDto } from './dto/create-category.dto'
import { UpdateCategoryDto } from './dto/update-category.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { CategoryEntity } from '../databases/category.entity'
import { DeleteResult, In, Like } from 'typeorm'
import { FilterBrandDto } from '../brand/dto/filter-brand.dto'
import { FilterCategoryDto } from './dto/filter-caegory.dto'

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(CategoryEntity) private categoryRepository: any
    ) {}
    async create(createCategoryDto: CreateCategoryDto) {
        const checkName = await this.categoryRepository.findOne({
            where: { name: createCategoryDto.name },
        })
        if (checkName) {
            throw new HttpException(
                'Danh mục đã tồn tại',
                HttpStatus.BAD_REQUEST
            )
        }
        const category = this.categoryRepository.create(createCategoryDto)
        await this.categoryRepository.save(category)
        throw new HttpException('Thêm mới thành công', HttpStatus.OK)
    }
    async multipleDelete(ids: string[]): Promise<DeleteResult> {
        return await this.categoryRepository.delete({ category_id: In(ids) })
    }
    async findAll(query: FilterCategoryDto) {
        const keyword = query.name || ''
    
        
        const limit = query.limit || 10
        const page = query.page || 1
        const skip = (Number(page) - 1) * Number(limit)
        const status = query.status || 1
        // console.log("status-------->",status);
        // console.log("name-------->",keyword);
        // console.log("skip-------->",query.status);
        
        const [docs, total]= await this.categoryRepository.createQueryBuilder('category')
        .where('category.name like :name',{name:`%${keyword}%`})
        .andWhere('category.status = :status',{status:Number(status)})
        .skip(skip)
        .take(limit)
        .orderBy('category.created_at','DESC')
        .getManyAndCount()
        return {docs,total}
    }
    async findAllCategory() {
        const category = await this.categoryRepository.find({
            select: ['category_id', 'name', 'thumbnail'],
            where: { status: 1 },
        })
        if (!category) {
            throw new HttpException(
                'Không tìm thấy danh mục',
                HttpStatus.BAD_REQUEST
            )
        }
        return category
    }
    async findOne(id: number) {
        const category = await this.categoryRepository.findOne({
            where: { category_id: id },
        })
        if (!category) {
            throw new HttpException(
                'Không tìm thấy danh mục',
                HttpStatus.BAD_REQUEST
            )
        }
        return category
    }

    async update(id: number, updateCategoryDto: any) {
        const category = await this.categoryRepository.findOne({
            where: { category_id: id },
        })
        if (!category) {
            throw new HttpException(
                'Không tìm thấy danh mục',
                HttpStatus.BAD_REQUEST
            )
        }
        await this.categoryRepository.update(
            { category_id: id },
            updateCategoryDto
        )
        throw new HttpException('Cập nhật thành công', HttpStatus.OK)
    }

    async remove(id: number) {
        const category = await this.categoryRepository.findOne({
            where: { category_id: id },
        })
        if (!category) {
            throw new HttpException(
                'Không tìm thấy danh mục',
                HttpStatus.BAD_REQUEST
            )
        }
        await this.categoryRepository.remove(category)
        throw new HttpException('Xóa thành công', HttpStatus.OK)
    }
}
