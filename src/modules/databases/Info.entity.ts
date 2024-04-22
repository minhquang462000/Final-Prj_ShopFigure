import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserEntity } from "./user.entity";

@Entity({name: 'infopost'})
export class InfoEntity {
    @PrimaryGeneratedColumn({type: 'int'})
    info_id: number
    @Column()
    title: string
    @Column()
    content: string
    @Column()
    thumbnail: string
    @Column({nullable: true, default: 1})
    status: number
    // Relationship
    @ManyToOne(() => UserEntity, (user) => user.infos)
    user: UserEntity
    @CreateDateColumn()
    created_at: Date
    @UpdateDateColumn()
    updated_at: Date
}