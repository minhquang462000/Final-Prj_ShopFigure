import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CartEntity } from "./cart.entity";
import { BrandEntity } from "./brand.entity";
import { SeriesEntity } from "./series.entity";
import { CategoryEntity } from "./category.entity";
import { CharacterEntity } from "./character.entity";
import { SaleEntity } from "./sale.entity";



@Entity({name:"products"})
export class ProductEntity {
    @PrimaryGeneratedColumn({type:"int"})
    product_id:number;
    @Column()
    name:string;
    @Column()
    price:string;
    @Column({default:1})
    quantity:number;
    @Column()
    description:string;
    @Column('simple-array')
    images:string[]
    @Column({default:1})
    status:number;
    @Column({nullable:true,default:null})
    discount:number;
    // OnlyCart
    @Column({default:1})
    Count:number
    //RelationShip
    // Sale
    @ManyToOne(()=>SaleEntity,(sale)=>sale.products)
    sale:ProductEntity
    // Cart
    @ManyToMany(()=>CartEntity,(cart)=>cart.product)
    @JoinTable({name:"cart_products"})
    cart:CartEntity[]
    //Brand
    @ManyToOne(()=>BrandEntity,(brand)=>brand.products)
    brand:BrandEntity
    //Series
    @ManyToOne(()=>SeriesEntity,(series)=>series.products)
    series:SeriesEntity
    //Character
    @ManyToOne(()=>CharacterEntity,(character)=>character.products)
    character:CharacterEntity
    // Category
    @ManyToMany(()=>CategoryEntity,(category)=>category.products)
    @JoinTable({name:"product_categories"})
    categories:CategoryEntity[]
    @Column()
    characteristics:string;
    @CreateDateColumn()
    created_at: Date
    @UpdateDateColumn()
    updated_at: Date
    

}