import { count } from 'console';
import { IsNotEmpty } from "class-validator";
import { ProductEntity } from "src/modules/databases/product.entity";
import { UserEntity } from "src/modules/databases/user.entity";

export class addToCartDto {
      product_id: number
    quantity: number
    products?: ProductEntity
    // @IsNotEmpty()
    
}
