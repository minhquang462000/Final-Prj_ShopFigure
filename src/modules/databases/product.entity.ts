import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne,  PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { BrandEntity } from "./brand.entity";
import { SeriesEntity } from "./series.entity";
import { CategoryEntity } from "./category.entity";
import { CharacterEntity } from "./character.entity";
import { SaleEntity } from "./sale.entity";
import { HistoryEntity } from "./history.entity";
import { FavouriteEntity } from "./favourite.entity";



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
    @Column({type:"text"})
    description:string;
    @Column('simple-array')
    images:string[]
    @Column({default:1})
    status:number;
    @Column({nullable:true,default:null})
    discount:number;
    //RelationShip
    // Sale
    @ManyToOne(()=>SaleEntity,(sale)=>sale.products)
    sale:ProductEntity
    // Cart
    //Brand
    @ManyToOne(()=>BrandEntity,(brand)=>brand.products)
    brand:BrandEntity
    //Series
    @ManyToOne(()=>SeriesEntity,(series)=>series.products)
    series:SeriesEntity
    //Character
    @ManyToOne(()=>CharacterEntity,(character)=>character.products)
    character:CharacterEntity
    //History
   @ManyToOne(()=>HistoryEntity,(historyOrder)=>historyOrder.products)
    historyOrder:HistoryEntity
    //Favourite
    @ManyToOne(()=>FavouriteEntity,(favourite)=>favourite.products)
    favourite:FavouriteEntity
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