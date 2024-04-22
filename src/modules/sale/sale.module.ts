import { Module } from '@nestjs/common';
import { SaleService } from './sale.service';
import { SaleController } from './sale.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { SaleEntity } from '../databases/sale.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SaleEntity]), ConfigModule],
  controllers: [SaleController],
  exports: [SaleService],
  providers: [SaleService],
})
export class SaleModule {}
