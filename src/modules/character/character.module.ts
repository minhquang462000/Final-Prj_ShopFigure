import { Module } from '@nestjs/common';
import { CharacterService } from './character.service';
import { CharacterController } from './character.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CharacterEntity } from './database/character.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CharacterEntity])],
  controllers: [CharacterController],
  providers: [CharacterService],
})
export class CharacterModule {}
