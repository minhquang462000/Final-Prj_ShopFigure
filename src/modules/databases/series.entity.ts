import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ProductEntity } from "./product.entity";

@Entity({name: 'series'})
export class SeriesEntity {
    @PrimaryGeneratedColumn({type: 'int'})
    seri_id: number
    @Column()
    name: string
    @Column()
    description: string
    @Column({nullable: true,default:null})
    thumbnail: string
    @Column({nullable: true, default: 1})
    status: number
    // Relationship
    @OneToMany(() => ProductEntity, (product) => product.series)
    products: ProductEntity[]
    @CreateDateColumn()
    created_at: Date
    @UpdateDateColumn()
    updated_at: Date
}