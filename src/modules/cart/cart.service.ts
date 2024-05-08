import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { CreateCartDto } from './dto/create-cart.dto'
import { UpdateCartDto } from './dto/update-cart.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { CartEntity } from '../databases/cart.entity'
import { ProductEntity } from '../databases/product.entity'
import { UserEntity } from '../databases/user.entity'

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
        throw new HttpException('Tài khoản đã có giỏ hàng', HttpStatus.BAD_REQUEST)
      }
        const user = await this.userRepository.findOne({
            where: { user_id: createCartDto.user },
        })
      
        let products = []
        const cart = new CartEntity()
        cart.user = user
        cart.product = products

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
                'product.name',
                'product.images',
                "product.count",
                'user.user_id',
                'user.name',
            ])
            .getOne()
        return data
    }

    async update(id: number, updateCartDto: UpdateCartDto) {
        const cart = await this.cartRepository.findOne({ where: { id: id } })
        if (!cart) {
            return new HttpException(
                'Không tìm thấy giỏ hàng',
                HttpStatus.BAD_REQUEST
            )
        }
        let products = []
        for (let i = 0; i < updateCartDto.product.length; i++) {
            const element = updateCartDto.product[i]
            const product = await this.productRepository.findOne({
                where: { id: element },
            })
            for (let j = 0; j < products.length; j++) {
                if (products[j].product_id === product.product_id) {
                    products[j].count = products[j].count + 1
                } else {
                    products.push(product)
                }
            }
        }
    }

    remove(id: number) {
        return `This action removes a #${id} cart`
    }
}
