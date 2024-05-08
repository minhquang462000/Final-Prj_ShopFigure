import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { CreateSeriesDto } from './dto/create-series.dto'
import { UpdateSeriesDto } from './dto/update-series.dto'
import { SeriesEntity } from '../databases/series.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { FilterSeriesDto } from './dto/filter-series.dto'
import { DeleteResult, In, Like } from 'typeorm'

@Injectable()
export class SeriesService {
    constructor(
        @InjectRepository(SeriesEntity) private seriesRepository: any
    ) {}
    async create(createSeriesDto: CreateSeriesDto) {
        const checkName = await this.seriesRepository.findOne({
            where: { name: createSeriesDto.name },
        })
        if (checkName) {
            throw new HttpException(
                'The series already exists',
                HttpStatus.BAD_REQUEST
            )
        }
        const series = this.seriesRepository.create(createSeriesDto)
        await this.seriesRepository.save(series)
        throw new HttpException(
            'The series has been created successfully',
            HttpStatus.OK
        )
    }

    async findAll(query: FilterSeriesDto) {
        const keyword = query.name || ''
    
        
        const limit = query.limit || 10
        const page = query.page || 1
        const skip = (Number(page) - 1) * Number(limit)
        const status = query.status || 1
        // console.log("status-------->",status);
        // console.log("name-------->",keyword);
        // console.log("skip-------->",query.status);
        
        const [docs, total]= await this.seriesRepository.createQueryBuilder('series')
        .where('series.name like :name',{name:`%${keyword}%`})
        .andWhere('series.status = :status',{status:Number(status)})
        .skip(skip)
        .take(limit)
        .orderBy('series.created_at','DESC')
        .getManyAndCount()
        return {docs,total}
    }
    async findOne(id: number) {
        const data = await this.seriesRepository.findOne({
            where: { series_id: id },
        })
        if (!data) {
            throw new HttpException(
                'The series does not exist',
                HttpStatus.BAD_REQUEST
            )
        }
        return data
    }
    async findAllSeries() {
        const series = await this.seriesRepository.find({
            select: ['series_id', 'name', 'thumbnail'],
            where: [{ status: 1 }],
        })
        if (!series) {
            throw new HttpException(
                'The series does not exist',
                HttpStatus.BAD_REQUEST
            )
        }
        return series
    }

    async update(id: number, updateSeriesDto: any) {
        const data = await this.seriesRepository.findOne({
            where: { series_id: id },
        })
        if (!data) {
            throw new HttpException(
                'The series does not exist',
                HttpStatus.BAD_REQUEST
            )
        }
        await this.seriesRepository.update({ series_id: id }, updateSeriesDto)
        throw new HttpException(
            'The series has been updated successfully',
            HttpStatus.OK
        )
    }
    async multipleDelete(ids: string[]): Promise<DeleteResult> {
        return await this.seriesRepository.delete({ series_id: In(ids) })
    }
    async remove(id: number) {
        const data = await this.seriesRepository.findOne({
            where: { series_id: id },
        })
        if (!data) {
            throw new HttpException(
                'The series does not exist',
                HttpStatus.BAD_REQUEST
            )
        }
        await this.seriesRepository.remove(data)
        throw new HttpException(
            'The series has been deleted successfully',
            HttpStatus.OK
        )
    }
}
