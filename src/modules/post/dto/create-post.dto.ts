import { IsNotEmpty } from "class-validator";
import { CategoryEntity } from "src/modules/category/database/category.entity";
import { CharacterEntity } from "src/modules/character/database/character.entity";
import { UserEntity } from "src/modules/user/database/user.entity";

export class CreatePostDto {

    title: string;
    description: string;
    thumbnail: string;
    status: number;
    @IsNotEmpty()
    categories:CategoryEntity
    user:UserEntity
    characters:CharacterEntity[]
}
