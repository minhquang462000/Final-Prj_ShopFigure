import { Module } from '@nestjs/common';
import { InfoService } from './info.service';
import { InfoController } from './info.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { InfoEntity } from '../databases/Info.entity';

@Module({
  imports: [TypeOrmModule.forFeature([InfoEntity]),ConfigModule],
  controllers: [InfoController],
  providers: [InfoService],
  exports: [InfoService]
})
export class InfoModule {}
