import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ProductEntity } from "./product.entity";

@Entity({name: 'characters'})
export class CharacterEntity {
    @PrimaryGeneratedColumn({type: 'int'})
    character_id: number
    @Column()
    name: string
    @Column({type:'text'})
    description: string
    @Column({nullable: true, default: null})
    thumbnail: string
    @Column({nullable: true, default: 1})
    status: number
    // RelationShip
    @OneToMany(() => ProductEntity, product => product.character)
    products: ProductEntity[]
    @CreateDateColumn()
    created_at: Date
    @UpdateDateColumn()
    updated_at: Date
}