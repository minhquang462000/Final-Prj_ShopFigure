import { ProductEntity } from "src/modules/databases/product.entity";
import { UserEntity } from "src/modules/databases/user.entity";

export class CreateCartDto {

    user: UserEntity ;
    product: ProductEntity[];
    quantity: number;
}
