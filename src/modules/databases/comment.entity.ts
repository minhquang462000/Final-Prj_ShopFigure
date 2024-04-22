import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { PostEntity } from "./post.entity";
import { UserEntity } from "./user.entity";

@Entity({name: 'comments'})
export class CommentEntity {
    @PrimaryGeneratedColumn({type: 'int'})
    comment_id: number
    @Column()
    content: string
    @Column({nullable: true, default: 1})
    status: number
    // Relationship
    @ManyToOne(() => PostEntity, (post) => post.comments)
    post: PostEntity
    // user
    @ManyToOne(() => UserEntity, (user) => user.comments)
    user: UserEntity
    @CreateDateColumn()
    created_at: Date
    @UpdateDateColumn()
    updated_at: Date
}