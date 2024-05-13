import { count } from 'console';
import { IsNotEmpty } from "class-validator";
import { ProductEntity } from "src/modules/databases/product.entity";
import { UserEntity } from "src/modules/databases/user.entity";

export class UpdateCartDto {
    // @IsNotEmpty()
    count: number
    product: number
}
