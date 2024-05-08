import { Injectable } from '@nestjs/common';
import { CreateHistoryDto } from './dto/create-history.dto';
import { UpdateHistoryDto } from './dto/update-history.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { HistoryEntity } from '../databases/history.entity';
import { UserEntity } from '../databases/user.entity';
import { ProductEntity } from '../databases/product.entity';

@Injectable()
export class HistoryService {
  constructor(
    @InjectRepository(HistoryEntity) private historyRepository: any
    ,@InjectRepository(UserEntity) private userReponsitory: any,
    @InjectRepository(ProductEntity) private productReponsitory: any
  ) {}
 async create(createHistoryDto: CreateHistoryDto) {
   const user = await this.userReponsitory.findOne({where: {user_id: createHistoryDto.user}})
   let products =[]
   for (let i = 0; i < createHistoryDto.products.length; i++) {
    const element = createHistoryDto.products[i];
    const product = await this.productReponsitory.findOne({where: {product_id: element}})
    products.push(product)
    
   }
    const history = new HistoryEntity();
    history.user = user;
    history.products = products;
    return await this.historyRepository.save(history);
  }

  findAll() {
  const data = this.historyRepository.createQueryBuilder('history')
  .leftJoinAndSelect('history.user', 'user')
  .leftJoinAndSelect('history.products', 'products')
  .select([
    'history',
    'user.user_id',
    'user.name',
    'products.product_id',
    'products.name',
    'products.price',
    'products.image',
    'products.description',
  ])
  .getMany()
  return data
  }

  findOne(id: number) {
   const data = this.historyRepository.createQueryBuilder('history')
   .leftJoinAndSelect('history.user', 'user')
   .leftJoinAndSelect('history.products', 'products')
   .select([
     'history',
     'user.user_id',
     'user.name',
     'products.product_id',
     'products.name',
     'products.price',
     'products.image',
     'products.description',
   ])
   .where('history.history_id = :id', {id: id})
   .getOne()
   return data
  }

  update(id: number, updateHistoryDto: UpdateHistoryDto) {
    return `This action updates a #${id} history`;
  }

  remove(id: number) {
    return `This action removes a #${id} history`;
  }
}
