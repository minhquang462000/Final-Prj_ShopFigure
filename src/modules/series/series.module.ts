import { Module } from '@nestjs/common';
import { SeriesService } from './series.service';
import { SeriesController } from './series.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { SeriesEntity } from '../databases/series.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SeriesEntity]),ConfigModule],
  controllers: [SeriesController],
  exports: [SeriesService],
  providers: [SeriesService],
})
export class SeriesModule {}
