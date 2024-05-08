import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { CreateBrandDto } from './dto/create-brand.dto'
import { UpdateBrandDto } from './dto/update-brand.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { BrandEntity } from '../databases/brand.entity'
import { query } from 'express'
import { FilterBrandDto } from './dto/filter-brand.dto'
import { DeleteResult, In, Like } from 'typeorm'

@Injectable()
export class BrandService {
    constructor(@InjectRepository(BrandEntity) private brandRepository: any) {}
    async create(createBrandDto: any) {
        const checkName = await this.brandRepository.findOne({
            where: { name: createBrandDto.name },
        })
        if (checkName) {
            throw new HttpException(
                'Thương hiệu đã tồn tại',
                HttpStatus.BAD_REQUEST
            )
        }
        const brand = this.brandRepository.create(createBrandDto)
        await await this.brandRepository.save(brand)
        throw new HttpException('Thêm mới thành công', HttpStatus.OK)
    }

    async findAll(query: FilterBrandDto) {
        const keyword = query.name || ''
    
        
        const limit = query.limit || 10
        const page = query.page || 1
        const skip = (Number(page) - 1) * Number(limit)
        const status = query.status || 1
        // console.log("status-------->",status);
        // console.log("name-------->",keyword);
        // console.log("skip-------->",query.status);
        
        const [docs, total]= await this.brandRepository.createQueryBuilder('brand')
        .where('brand.name like :name',{name:`%${keyword}%`})
        .andWhere('brand.status = :status',{status:Number(status)})
        .skip(skip)
        .take(limit)
        .orderBy('brand.created_at','DESC')
        .getManyAndCount()
        return {docs,total}
    }
    async findOne(id: number) {
        const brand = await this.brandRepository.findOne({
            where: { brand_id: id },
        })
        return brand
    }
    async findAllBrand() {
        const brands = await this.brandRepository.find({
            select: ['brand_id', 'name', 'thumbnail'],
            where: [{ status: 1 }],
        })
        if (!brands) {
            throw new HttpException(
                'Không tìm thấy thương hiệu',
                HttpStatus.BAD_REQUEST
            )
        }
        return brands
    }

    async update(id: number, updateBrandDto: any) {
        const brand = await this.brandRepository.findOne({
            where: { brand_id: id },
        })
        if (!brand) {
            throw new HttpException(
                'Không tìm thấy thương hiệu',
                HttpStatus.BAD_REQUEST
            )
        }
        await this.brandRepository.save({ ...brand, ...updateBrandDto })
        throw new HttpException('Cập nhật thành công', HttpStatus.OK)
    }

    async multipleDelete(ids: string[]): Promise<DeleteResult> {
        return await this.brandRepository.delete({ brand_id: In(ids) })
    }
    async remove(id: number) {
        const brand = await this.brandRepository.findOne({
            where: { brand_id: id },
        })
        if (!brand) {
            throw new HttpException(
                'Không tìm thấy thương hiệu',
                HttpStatus.BAD_REQUEST
            )
        }
        await this.brandRepository.remove(brand)
        throw new HttpException('Xóa thành công', HttpStatus.OK)
    }
}
