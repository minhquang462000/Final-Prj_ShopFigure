
import { CategoryEntity } from 'src/modules/category/database/category.entity';
import { CharacterEntity } from 'src/modules/character/database/character.entity';
import { UserEntity } from "src/modules/user/database/user.entity";
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'posts' })
export class PostEntity {
    @PrimaryGeneratedColumn()
    post_id: number;
    @Column()
    title: string;
    @Column()
    description: string;
    @Column({ nullable: true ,default:null})
    thumbnail: string;
    @Column({type:"int" , default:1})
    status: number;
    @CreateDateColumn()
    created_at: Date
    @UpdateDateColumn()
    updated_at: Date
    @ManyToOne(() => UserEntity, (user) => user.posts)
    user: UserEntity;
    @ManyToOne(() => CategoryEntity, (category) => category.posts)
    categories: CategoryEntity
    @ManyToMany(() => CharacterEntity)
    @JoinTable({name: 'post_character'})
    characters: CharacterEntity[]
}
