import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ProductEntity } from '../databases/product.entity';
import { CharacterEntity } from '../databases/character.entity';
import { CategoryEntity } from '../databases/category.entity';
import { BrandEntity } from '../databases/brand.entity';
import { SeriesEntity } from '../databases/series.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity,CharacterEntity,CategoryEntity
    ,BrandEntity,SeriesEntity
  ]),ConfigModule],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
