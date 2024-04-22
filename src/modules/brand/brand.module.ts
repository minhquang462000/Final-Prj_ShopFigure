import { Module } from '@nestjs/common';
import { BrandService } from './brand.service';
import { BrandController } from './brand.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrandEntity } from '../databases/brand.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ TypeOrmModule.forFeature([BrandEntity]),ConfigModule],
  controllers: [BrandController],
  providers: [BrandService],
  exports: [BrandService]
})
export class BrandModule {}
