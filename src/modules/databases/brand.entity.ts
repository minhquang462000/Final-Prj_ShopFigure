import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ProductEntity } from "./product.entity";

@Entity({name: 'bands'})
export class BrandEntity {
    @PrimaryGeneratedColumn({type: 'int'})
    brand_id: number
    @Column()
    name: string
    @Column()
    description: string
    @Column({nullable: true,default:null})
    thumbnail: string
    @Column({nullable: true, default: 1})
    status: number
    // RelationShip
    @OneToMany(() => ProductEntity, (product) => product.brand)
    products: ProductEntity[]
    @CreateDateColumn()
    created_at: Date
    @UpdateDateColumn()
    updated_at: Date
}