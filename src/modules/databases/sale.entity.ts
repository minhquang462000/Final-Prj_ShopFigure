import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ProductEntity } from "./product.entity";


@Entity({name: 'sales'})
export class SaleEntity {
    @PrimaryGeneratedColumn()
    sale_id: number
    @Column()
    time: Date
    // Relationship
    @OneToMany(type => ProductEntity, product => product.sale)
    products: ProductEntity[]
    @CreateDateColumn()
    created_at: Date
    @UpdateDateColumn()
    updated_at: Date
}
