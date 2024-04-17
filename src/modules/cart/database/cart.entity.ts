import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Cart {
    @PrimaryGeneratedColumn()
    cart_id: number
    @Column()
    name: string
    @Column()
    price: number
    @Column()
    quantity: number
    @Column()
    created_at: Date
    @Column()
    updated_at: Date
}
