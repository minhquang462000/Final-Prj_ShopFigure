import { Column, CreateDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ProductEntity } from "./product.entity";

@Entity({name: 'categories'})
export class CategoryEntity {
    @PrimaryGeneratedColumn({type: 'int'})
    category_id: number
    @Column()
    name: string
    @Column({type:'text'})
    description: string
    @Column({nullable: true, default: null})
    thumbnail: string
    @Column({nullable: true, default: 1})
    status: number
    // RelationShip
    @ManyToMany(type => ProductEntity, product => product.categories)
    products: ProductEntity[]
    @CreateDateColumn()
    created_at: Date
    @UpdateDateColumn()
    updated_at: Date
}