import { json } from 'stream/consumers';
import { Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserEntity } from "./user.entity";
import { ProductEntity } from "./product.entity";

class CartItem {
    product_id: number
    quantity: number
    products?: ProductEntity
}
@Entity({name: 'carts'})
export class CartEntity {
    @PrimaryGeneratedColumn({type: 'int'})
    cart_id: number
    // Relationship
    // @Column('simple-array', {nullable: true})
    // productQuantity: string[]
    // @ManyToMany(() => ProductEntity, (product) => product.cart)
    // product: ProductEntity[]
    @Column('json', {nullable: true})
    items: CartItem[]
    // User
    @OneToOne(() => UserEntity, (user) => user.cart)
    user: UserEntity
    @CreateDateColumn()
    created_at: Date
    @UpdateDateColumn()
    updated_at: Date
}