
import { PostEntity } from 'src/modules/post/database/post.entity';
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';


@Entity({name: 'users'})
export class UserEntity {
    @PrimaryGeneratedColumn({type:'int'})
    user_id: number
    @Column({type:'varchar'})
    name: string
    @Column({type:'varchar'})
    password: string
    @Column({type:'varchar'})
    email: string
    @Column({type:'tinyint'})
    status: number
    @Column({type:'tinyint'})
    role: number
    @Column({
        nullable: true,default: null})
    avatar: string
    @Column({
        nullable: true,default: null})
    refresh_token: string
    @CreateDateColumn()
    created_at: Date
    @UpdateDateColumn()
    updated_at: Date
    @OneToMany(() => PostEntity, (post) => post.user)
    posts: PostEntity[]
    
}