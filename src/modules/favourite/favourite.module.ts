import { Module } from '@nestjs/common';
import { FavouriteService } from './favourite.service';
import { FavouriteController } from './favourite.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { FavouriteEntity } from '../databases/favourite.entity';
import { ProductEntity } from '../databases/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FavouriteEntity,ProductEntity]),ConfigModule],
  controllers: [FavouriteController],
  providers: [FavouriteService],
  exports: [FavouriteService]
})
export class FavouriteModule {}
