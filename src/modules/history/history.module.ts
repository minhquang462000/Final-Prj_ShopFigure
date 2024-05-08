import { Module } from '@nestjs/common';
import { HistoryService } from './history.service';
import { HistoryController } from './history.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../databases/user.entity';
import { ConfigModule } from '@nestjs/config';
import { HistoryEntity } from '../databases/history.entity';
import { ProductEntity } from '../databases/product.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([HistoryEntity, UserEntity, ProductEntity]),
    ConfigModule,
  ],
  controllers: [HistoryController],
  providers: [HistoryService],
  exports: [HistoryService],
})
export class HistoryModule {}
