import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: 'favourites'})
export class FavouriteEntity {
    @PrimaryGeneratedColumn({type: 'int'})
    favourite_id: number
    @CreateDateColumn()
    created_at: Date
    @UpdateDateColumn()
    updated_at: Date
}