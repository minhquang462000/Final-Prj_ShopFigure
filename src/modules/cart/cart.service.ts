import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CartEntity } from '../databases/cart.entity';
import { ProductEntity } from '../databases/product.entity';
import { UserEntity } from '../databases/user.entity';

@Injectable()
export class CartService {
  constructor( 
    @InjectRepository(CartEntity) private  cartRepository: any,
    @InjectRepository(ProductEntity) private  productRepository: any,
    @InjectRepository(UserEntity) private  userRepository: any
  ) {}
  async create(createCartDto: CreateCartDto) {

    const user = await this.userRepository.findOne({
      where: { id: createCartDto.user },
    });
    let products = []
    for (let i = 0; i < createCartDto.product.length; i++) {
      const element = createCartDto.product[i];
      const product = await this.productRepository.findOne({ where: { id: element } });
      for (let j = 0; j < products.length; j++) {
        if (products[j].product_id === product.product_id) {
          products[j].count = products[j].count + 1
        }else{
          products.push(product)
        } 
      }
    }
    const cart = new CartEntity();
    cart.user = user;
    cart.product = products;
    return await this.cartRepository.save(cart);
  }

  findAll() {
    return `This action returns all cart`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cart`;
  }

  async update(id: number, updateCartDto: UpdateCartDto) {
    const cart = await this.cartRepository.findOne({ where: { id: id } });
    if (!cart) {
      return new HttpException('Không tìm thấy giỏ hàng', HttpStatus.BAD_REQUEST);
    }
    let products = []
    for (let i = 0; i < updateCartDto.product.length; i++) {
      const element = updateCartDto.product[i];
      const product = await this.productRepository.findOne({ where: { id: element } });
      for (let j = 0; j < products.length; j++) {
        if (products[j].product_id === product.product_id) {
          products[j].count = products[j].count + 1
        }else{
          products.push(product)
        } 
      }
    }

  }

  remove(id: number) {
    return `This action removes a #${id} cart`;
  }
}
