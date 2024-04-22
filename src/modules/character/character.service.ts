import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
import { CharacterEntity } from '../databases/character.entity';
import { Like, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { FilterCharacterDto } from './dto/filter-character.dto';

@Injectable()
export class CharacterService {
  constructor (
    @InjectRepository(CharacterEntity) private characterRepository: Repository<CharacterEntity>
  ) {}
  async create(createCharacterDto: CreateCharacterDto) {
   const checkName = this.characterRepository.findOne({ where: { name: createCharacterDto.name } });
   if (checkName) {
     throw new HttpException('Nhân vật đã tồn tại', HttpStatus.BAD_REQUEST);
   }
   const character = this.characterRepository.create(createCharacterDto);
   await this.characterRepository.save(character);
   throw new HttpException('Thêm mới thành công', HttpStatus.OK);
  }

  async findAll(query: FilterCharacterDto) {
    const keyword = query.name || '';
    const limit = query.limit || 10;
    const page = query.page || 1;
    const skip = (Number(page) - 1) * Number(limit);
    const [res, total] = await this.characterRepository.findAndCount({
      where: [{ name: Like(`%${keyword}%`) }],
      select: ['character_id', 'name', 'status', 'created_at', 'updated_at'],
      order: { created_at: 'DESC' },
      take: Number(limit),
      skip: Number(skip)
    });
    const lastPage = Math.ceil(total / Number(limit));
    const nextPage = Number(page) + 1 > lastPage ? null : Number(page) + 1;
    const prevPage = Number(page) - 1 < 1 ? null : Number(page) - 1;
    return { data: res, currenPage: Number(page), total, nextPage, prevPage, lastPage };
  } 

  async findOne(id: number) {
    const category = await this.characterRepository.findOne({ where: { character_id: id } });
    if (!category) {
      throw new HttpException('Không tìm thấy danh mục', HttpStatus.BAD_REQUEST);
    }
    return category;
  }

  async update(id: number, updateCharacterDto: any) {
    const category = await this.characterRepository.findOne({ where: { character_id: id } });
    if (!category) {
      throw new HttpException('Không tìm thấy danh mục', HttpStatus.BAD_REQUEST);
    }
    await this.characterRepository.update({ character_id: id }, updateCharacterDto);
    throw new HttpException('Cập nhật thành công', HttpStatus.OK);
  }

  async remove(id: number) {
    const  character = await this.characterRepository.findOne({ where: { character_id: id } });
    if (!character) {
      throw new HttpException('Không tìm thấy danh mục', HttpStatus.BAD_REQUEST);
    }
    await this.characterRepository.remove(character);
    throw new HttpException('Xóa thành công', HttpStatus.OK);
  }
}
