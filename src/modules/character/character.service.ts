import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { CreateCharacterDto } from './dto/create-character.dto'
import { UpdateCharacterDto } from './dto/update-character.dto'
import { CharacterEntity } from '../databases/character.entity'
import { DeleteResult, In, Like, Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { FilterCharacterDto } from './dto/filter-character.dto'

@Injectable()
export class CharacterService {
    constructor(
        @InjectRepository(CharacterEntity)
        private characterRepository: any
    ) {}
    async create(createCharacterDto: CreateCharacterDto) {
        const checkName = await this.characterRepository.findOne({
            where: { name: createCharacterDto.name },
        })
        console.log(checkName)

        if (checkName) {
            throw new HttpException(
                'Nhân vật đã tồn tại',
                HttpStatus.BAD_REQUEST
            )
        }
        const character = this.characterRepository.create(createCharacterDto)
        await this.characterRepository.save(character)
        throw new HttpException('Thêm mới thành công', HttpStatus.OK)
    }

    async findAll(query: FilterCharacterDto) {
        const keyword = query.name || ''
    
        
        const limit = query.limit || 10
        const page = query.page || 1
        const skip = (Number(page) - 1) * Number(limit)
        const status = query.status || 1
        // console.log("status-------->",status);
        // console.log("name-------->",keyword);
        // console.log("skip-------->",query.status);
        
        const [docs, total]= await this.characterRepository.createQueryBuilder('character')
        .where('character.name like :name',{name:`%${keyword}%`})
        .andWhere('character.status = :status',{status:Number(status)})
        .skip(skip)
        .take(limit)
        .orderBy('character.created_at','DESC')
        .getManyAndCount()
        return {docs,total}
    }
        async findAllCharacter() {
        const character = await this.characterRepository.find({
            select: ['character_id', 'name', 'thumbnail'],
            where: { status: 1 },
        })
        if (!character) {
            throw new HttpException(
                'Không tìm thấy nhân vật',
                HttpStatus.BAD_REQUEST
            )
        }
        return character
    }
    async findOne(id: number) {
        const character = await this.characterRepository.findOne({
            where: { character_id: id },
        })
        if (!character) {
            throw new HttpException(
                'Không tìm thấy nhân vật',
                HttpStatus.BAD_REQUEST
            )
        }
        return character
    }


    async update(id: number, updateCharacterDto: any) {
        const character = await this.characterRepository.findOne({
            where: { character_id: id },
        })
        if (!character) {
            throw new HttpException(
                'Không tìm thấy nhân vật',
                HttpStatus.BAD_REQUEST
            )
        }
        await this.characterRepository.update(
            { character_id: id },
            updateCharacterDto
        )
        throw new HttpException('Cập nhật thành công', HttpStatus.OK)
    }
    async multipleDelete(ids: string[]): Promise<DeleteResult> {
        return await this.characterRepository.delete({ character_id: In(ids) })
    }
    async remove(id: number) {
        const character = await this.characterRepository.findOne({
            where: { character_id: id },
        })
        if (!character) {
            throw new HttpException(
                'Không tìm thấy nhân vật',
                HttpStatus.BAD_REQUEST
            )
        }
        await this.characterRepository.remove(character)
        throw new HttpException('Xóa thành công', HttpStatus.OK)
    }
}
