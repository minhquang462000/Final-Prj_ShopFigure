
import { PostEntity } from "src/modules/post/database/post.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('categories')
export class CategoryEntity {
    @PrimaryGeneratedColumn()
    category_id: number;
    @Column()
    name: string;
    @Column({ type: "int", default: 1 })
    status: number;
    @Column()
    description: string;
    @CreateDateColumn()
    created_at: Date;
    @UpdateDateColumn()
    updated_at: Date;
    @OneToMany(() => PostEntity, (post) => post.categories)
    posts: PostEntity[];
}
