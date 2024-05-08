import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserEntity } from "./user.entity";
import { CommentEntity } from "./comment.entity";

@Entity({name: 'posts'})
export class PostEntity {
    @PrimaryGeneratedColumn({type: 'int'})
    post_id: number
    @Column()
    title: string
    @Column({type: 'text'})
    description: string
    @Column()
    thumbnail: string
    @Column()
    brand: string
    @Column()
    content:string
    @Column({nullable: true, default: 1})
    status: number
    // RelationShip
    // User
    @ManyToOne(type => UserEntity, user => user.posts)
    user: UserEntity
    // Comment
    @OneToMany(type => CommentEntity, comment => comment.post)
    comments: CommentEntity[]
    @CreateDateColumn()
    created_at: Date
    @UpdateDateColumn()
    updated_at: Date
}