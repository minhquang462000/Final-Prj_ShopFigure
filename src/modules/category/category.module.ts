import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { TypeORMError } from 'typeorm';
import { CategoryEntity } from '../databases/category.entity';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryEntity]), ConfigModule],
  exports: [CategoryService],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}
