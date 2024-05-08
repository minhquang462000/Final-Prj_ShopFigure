import {  CreateDateColumn, Entity,  ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserEntity } from "./user.entity";
import { ProductEntity } from "./product.entity";

@Entity({name: 'histories'})
export class HistoryEntity {
    @PrimaryGeneratedColumn({type: 'int'})
    history_id: number
    //Relationship
    @OneToMany(() => ProductEntity, (products) => products.historyOrder)
    products: ProductEntity[]
    @ManyToOne(() => UserEntity, (user) => user.cart)
    user: UserEntity
    @CreateDateColumn()
    created_at: Date
    @UpdateDateColumn()
    updated_at: Date
}