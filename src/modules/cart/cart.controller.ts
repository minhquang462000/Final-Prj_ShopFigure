import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { addToCartDto } from './dto/update-cart.dto';




@ApiBearerAuth()
@ApiResponse({ status: 201, description: 'ok baby'})
@ApiResponse({ status: 403, description: 'Forbidden'})

@ApiTags('Cart')
@Controller('api/v1/carts')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  create(@Body() createCartDto: CreateCartDto) {
    return this.cartService.create(createCartDto);
  }

  @Get()
  findAll() {
    return this.cartService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cartService.getCart(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCartDto: addToCartDto) {
    return this.cartService.addToCart(+id, updateCartDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cartService.remove(+id);
  }
}
