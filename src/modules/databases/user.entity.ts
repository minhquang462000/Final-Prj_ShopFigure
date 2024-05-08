
import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { PostEntity } from './post.entity';
import { CartEntity } from './cart.entity';
import { CommentEntity } from './comment.entity';
import { InfoEntity } from './Info.entity';
import { HistoryEntity } from './history.entity';


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
    @Column({type:'tinyint',default:1})
    status: number
    @Column({type:'tinyint',default:1})
    role: number
    @Column({type:'tinyint',default:0}) 
    gender: number
    @Column({default:null})
    address: string
    @Column({default:null})
    phone: string
    @Column({nullable: true, default: null})
    avatar: string
    @Column({
        nullable: true,default: null})
    refresh_token: string
    // RelationShip
    // Post
    @OneToMany(() => PostEntity, (post) => post.user)
    posts: PostEntity[]
    // Cart
    @OneToOne(() => CartEntity,{
    cascade: true})
    @JoinColumn({name: 'cart_id'})
    cart: CartEntity
    //Comment
    @OneToMany(() => CommentEntity, (comment) => comment.user)
    comments: CommentEntity[]
    // Info
    @OneToMany(() => InfoEntity, (info) => info.user)
    infos: InfoEntity[]
    @OneToMany(() => HistoryEntity, (history) => history.user)
    history: HistoryEntity[]
    @CreateDateColumn()
    created_at: Date
    @UpdateDateColumn()
    updated_at: Date
    // @OneToMany(() => PostEntity, (post) => post.user)
    // posts: PostEntity[]
}