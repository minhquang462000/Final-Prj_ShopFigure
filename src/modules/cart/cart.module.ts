import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { CartEntity } from '../databases/cart.entity';
import { ProductEntity } from '../databases/product.entity';
import { UserEntity } from '../databases/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CartEntity, ProductEntity, UserEntity]), ConfigModule],
  controllers: [CartController],
  providers: [CartService],
  exports: [CartService],
})
export class CartModule {}
