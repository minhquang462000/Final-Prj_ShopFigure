import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateSeriesDto } from './dto/create-series.dto';
import { UpdateSeriesDto } from './dto/update-series.dto';
import { SeriesEntity } from '../databases/series.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { FilterSeriesDto } from './dto/filter-series.dto';
import { Like } from 'typeorm';

@Injectable()
export class SeriesService {
  constructor ( @InjectRepository(SeriesEntity) private seriesRepository: any) {}
 async create(createSeriesDto: CreateSeriesDto) {
    const checkName = await this.seriesRepository.findOne({ where: { name: createSeriesDto.name } });
    if (checkName) {
      throw new HttpException('The series already exists', HttpStatus.BAD_REQUEST);
    }
    const series = this.seriesRepository.create(createSeriesDto);
    await this.seriesRepository.save(series);
    throw new HttpException('The series has been created successfully', HttpStatus.OK);
  }

  async findAll(query: FilterSeriesDto) {
    const keyword = query.name || '';
    const limit = query.limit || 10;
    const page = query.page || 1;
    const skip = (Number(page) - 1) * Number(limit);
    const [res, total] = await this.seriesRepository.findAndCount({
      where: [{ name: Like(`%${keyword}%`) }],
      select: ['series_id', 'name', 'status', 'created_at', 'updated_at'],
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
   const data = await this.seriesRepository.findOne({ where: { series_id: id } });
   if (!data) {
    throw new HttpException('The series does not exist', HttpStatus.BAD_REQUEST);
   }
   return data;
  }

  async update(id: number, updateSeriesDto: any) {
    const data = await this.seriesRepository.findOne({ where: { series_id: id } });
    if (!data) {
      throw new HttpException('The series does not exist', HttpStatus.BAD_REQUEST);
    }
    await this.seriesRepository.update({ series_id: id }, updateSeriesDto);
    throw new HttpException('The series has been updated successfully', HttpStatus.OK);
  }

  async remove(id: number) {
   const  data = await this.seriesRepository.findOne({ where: { series_id: id } });
   if (!data) {
    throw new HttpException('The series does not exist', HttpStatus.BAD_REQUEST);
   }
   await this.seriesRepository.remove(data);
   throw new HttpException('The series has been deleted successfully', HttpStatus.OK);
  }
}
