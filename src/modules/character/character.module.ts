import { Module } from '@nestjs/common';
import { CharacterService } from './character.service';
import { CharacterController } from './character.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CharacterEntity } from '../databases/character.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [TypeOrmModule.forFeature([CharacterEntity]),ConfigModule],
  exports: [CharacterService],
  controllers: [CharacterController],
  providers: [CharacterService],
})
export class CharacterModule {}
