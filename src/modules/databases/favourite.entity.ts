import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ProductEntity } from "./product.entity";

@Entity({name: 'favourites'})
export class FavouriteEntity {
    @PrimaryGeneratedColumn({type: 'int'})
    favourite_id: number
    @OneToMany(type => ProductEntity, product => product.favourite)
    products: ProductEntity[]
    @CreateDateColumn()
    created_at: Date
    @UpdateDateColumn()
    updated_at: Date
}