import { Injectable } from '@nestjs/common';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CharacterEntity } from './database/character.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CharacterService {
  constructor(
   @InjectRepository(CharacterEntity) private  characterRepository: Repository<CharacterEntity>,
  ) {}
  create(createCharacterDto: CreateCharacterDto) {
    return 'This action adds a new character';
  }

  findAll() {
    return `This action returns all character`;
  }

  async findOne(id: number) {
    const data = await this.characterRepository.findOne({
      where: { character_id: id },
    });
    return data;
  }

  update(id: number, updateCharacterDto: UpdateCharacterDto) {
    return `This action updates a #${id} character`;
  }

  remove(id: number) {
    return `This action removes a #${id} character`;
  }
}
