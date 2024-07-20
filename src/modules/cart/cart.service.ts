
import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { CreateCartDto } from './dto/create-cart.dto'
import {  addToCartDto } from './dto/update-cart.dto'
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
       return
      }
        const user = await this.userRepository.findOne({
            where: { user_id: createCartDto.user },
        })
      
        const cart = new CartEntity()
      cart.user = user
      cart.items =[]

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
        const data = this.cartRepository.createQueryBuilder('cart')
        .leftJoinAndSelect('cart.user', 'user')
    .where('user.user_id = :id', { id })
    .select(['cart'])
    .getOne();
    return data
    
    }

  // async update(id: number, updateCartDto: UpdateCartDto) {
  //   const quantityProduct = JSON.stringify({...updateCartDto,count:1}).replace(/,/g, "&")
  //       const cart = await this.cartRepository
  //           .createQueryBuilder('cart')
  //           .leftJoinAndSelect('cart.product', 'product')
  //           .where('cart_id = :id', { id })
  //           .getOne()
  //       if (!cart) {
  //           return new HttpException(
  //               'Không tìm thấy giỏ hàng',
  //               HttpStatus.BAD_REQUEST
  //           )
  //   }
  //   const existingProduct = cart.product.find(p => p.product_id === Number(updateCartDto.product));
  //   if (existingProduct) {
  //     // Nếu sản phẩm đã tồn tại trong giỏ hàng, cập nhật số lượng
  //     let newProductQuantity = []
  //     for (let i = 0; i < cart.productQuantity.length; i++) {
  //       const element = cart.productQuantity[i].replace(/&/g, ",");
  //       const obj = JSON.parse(element);
  //       if (Number(obj.product) === Number(updateCartDto.product)) {
  //        if (Number(updateCartDto.count) === 0) {
  //          obj.count = Number(obj.count) + 1
  //            cart.productQuantity[i] = JSON.stringify(obj).replace(/,/g, "&");
  //         }else if (Number(updateCartDto.count) < 0) {
  //          const indexProduct = cart.product.findIndex(p => p.product_id === Number(updateCartDto.product));
  //           cart.product.splice(indexProduct, 1);
  //          const indexQuantity = cart.productQuantity.findIndex(p => p.replace(/&/g, ",") === element);
  //          cart.productQuantity.splice(indexQuantity, 1);
  //         // console.log(cart.productQuantity);
  //         //  return newProductQuantity = cart.productQuantity
  //         }
  //         else {
  //          obj.count = Number(updateCartDto.count);
  //            cart.productQuantity[i] = JSON.stringify(obj).replace(/,/g, "&");
  //         }
  //       }
      
  //     }
  //   } else {
  //     // Nếu sản phẩm chưa tồn tại trong giỏ hàng, thêm vào
  //     const product = await this.productRepository.findOne({ where: { product_id: updateCartDto.product } });
  //     if (!product) {
  //       throw new HttpException('Không tìm thấy sản phẩm', HttpStatus.BAD_REQUEST);
  //     }
  //   cart.product.push(product);
  //     cart.productQuantity.push(quantityProduct);
  //   }
  //     await this.cartRepository.save(cart)
  //       return new HttpException('Cập nhật thành công', HttpStatus.OK);
  //   }
async findCardById(id: number) {
  const cart = await this.cartRepository.findOne({ where: { cart_id: id } });
  return cart;
}
async getCart(id: number) {
   const cart = await this.findCardById(id);
  // console.log("cart---->",cart);
  
  if (cart) {
      for (let i = 0; i < cart.items.length; i++) {
        const product = await this.productRepository
          .findOne({
            where: { product_id: cart.items[i].productId },
            select: ['product_id', 'name', 'price', 'images','quantity','discount'],
          });
          cart.items[i].product = product;
    }
  } else {
      throw new HttpException('Không tìm thấy giỏ hàng', HttpStatus.BAD_REQUEST);
    }
    return cart;
  }

  async addToCart(id: number, addToCart: addToCartDto) {     
     let cart = await this.cartRepository.findOne({ where: { cart_id: id } });
    if (!cart) {
      // cart = this.cartRepository.create({ items: [] });
      return new HttpException('Không tìm thấy giỏ hàng', HttpStatus.BAD_REQUEST);
    }
    // console.log("cart---->",cart);
if (!addToCart.quantity) {
   const cartItem = cart.items.find(item => item.productId === addToCart.product_id);
    if (cartItem) {
      cartItem.quantity += 1;
    } else {
      cart.items.push({ productId: addToCart.product_id, quantity: 1});
    }
}else if (addToCart.quantity < 0) {
  const newItems = cart.items.filter(item => item.productId !== addToCart.product_id);
  cart.items = newItems;
} else {
  const cartItem = cart.items.find(item => item.productId === addToCart.product_id);
  if (cartItem) { 
    cartItem.quantity = addToCart.quantity;
  }
}
    return this.cartRepository.save(cart);
  }
    remove(id: number) {
        return `This action removes a #${id} cart`
    }
}
