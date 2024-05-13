import { IsArray } from 'class-validator';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { CreateCartDto } from './dto/create-cart.dto'
import { UpdateCartDto } from './dto/update-cart.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { CartEntity } from '../databases/cart.entity'
import { ProductEntity } from '../databases/product.entity'
import { UserEntity } from '../databases/user.entity'
import { count } from 'console'
import { stringify } from 'querystring'
import { json } from 'stream/consumers'

@Injectable()
export class CartService {
    constructor(
        @InjectRepository(CartEntity) private cartRepository: any,
        @InjectRepository(ProductEntity) private productRepository: any,
        @InjectRepository(UserEntity) private userRepository: any
    ) {}
    async create(createCartDto: CreateCartDto) {
      
      if (!createCartDto.user) {
        return new HttpException('Không tồn tại người dùng', HttpStatus.BAD_REQUEST)
      }
     
      if (await this.checkUser(Number(createCartDto.user))) {
       return
      }
        const user = await this.userRepository.findOne({
            where: { user_id: createCartDto.user },
        })
      
        const cart = new CartEntity()
        cart.user = user
        cart.product = []
        cart.productQuantity = []

        await this.cartRepository.save(cart)
        return new HttpException('Tạo mới thành công', HttpStatus.OK)
    }

  async  findAll() {
        const data = await this.cartRepository
            .createQueryBuilder('cart')
            .leftJoinAndSelect('cart.user', 'user')
            .leftJoinAndSelect('cart.product', 'product')
            .getMany()
        return data
    }

    async checkUser(id: number) {
        const data = await this.cartRepository
            .createQueryBuilder('cart')
            .leftJoinAndSelect('cart.user', 'user')
            .where('user.user_id = :id', { id })
            .getOne()
       if (data) {
        return true
       }
       return false
          }
   async findOne(id: number) {
        const data = await this.cartRepository
            .createQueryBuilder('cart')
            .leftJoinAndSelect('cart.user', 'user')
            .leftJoinAndSelect('cart.product', 'product')
            // .where('cart.cart_id = :id', {id})
            .andWhere('user.user_id = :id', { id })
            .select([
                'cart',
                'product.product_id',
                'product.quantity',
              'product.price',
                'product.discount',
                'product.name',
                'product.images',
                'user.user_id',
                'user.name',
            ])
            .getOne()
        return data
    }

  async update(id: number, updateCartDto: UpdateCartDto) {
    const quantityProduct = JSON.stringify(updateCartDto).replace(/,/g, "&")
    // console.log("quantityProduct---->",quantityProduct);

    
    
        const cart = await this.cartRepository
            .createQueryBuilder('cart')
            .leftJoinAndSelect('cart.product', 'product')
            .where('cart_id = :id', { id })
            .getOne()
        if (!cart) {
            return new HttpException(
                'Không tìm thấy giỏ hàng',
                HttpStatus.BAD_REQUEST
            )
    }
         const existingProduct = cart.product.find(p => p.product_id === Number(updateCartDto.product));
    if (existingProduct) {
      // Nếu sản phẩm đã tồn tại trong giỏ hàng, cập nhật số lượng
      for (let i = 0; i < cart.productQuantity.length; i++) {
        const element = cart.productQuantity[i].replace(/&/g, ",");
        const obj = JSON.parse(element);
        if (Number(obj.product) === Number(updateCartDto.product)) {
          obj.count = Number(obj.count) + Number(updateCartDto.count);
        }
        cart.productQuantity[i] = JSON.stringify(obj).replace(/,/g, "&");
      }
    } else {
      // Nếu sản phẩm chưa tồn tại trong giỏ hàng, thêm vào
      const product = await this.productRepository.findOne({ where: { product_id: updateCartDto.product } });
      if (!product) {
        throw new HttpException('Không tìm thấy sản phẩm', HttpStatus.BAD_REQUEST);
      }
      cart.product.push(product);
      cart.productQuantity.push(quantityProduct);
      
    }
      //  console.log("cart---->",cart);
        
      await this.cartRepository.save(cart)
        return new HttpException('Cập nhật thành công', HttpStatus.OK);
    }

    remove(id: number) {
        return `This action removes a #${id} cart`
    }
}
