import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString, IsUrl } from "class-validator";
import { BrandEntity } from "src/modules/databases/brand.entity";
import { CategoryEntity } from "src/modules/databases/category.entity";
import { CharacterEntity } from "src/modules/databases/character.entity";
import { SaleEntity } from "src/modules/databases/sale.entity";
import { SeriesEntity } from "src/modules/databases/series.entity";

export class CreateProductDto {
    // name
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string;
    // description
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    description: string;
    //price
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    price: string;
    //images
    @ApiProperty()
    images: string;
    //charecterisics
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    characteristics: string;
    //quantity
    @ApiProperty()
    @IsNotEmpty()

    quantity: string;
    @ApiProperty()
    //discount
    @ApiProperty()

    discount: string;
    // Chare
    //status
    @ApiProperty()
    status: string;
    //categories
    @ApiProperty()
    categories: CategoryEntity[];
    // //brand
    @ApiProperty()
    brand: BrandEntity;
    //series
    @ApiProperty()
    series: SeriesEntity;
    //characters
    @ApiProperty()
    character: CharacterEntity;
    // @ApiProperty()
    // sale: SaleEntity;
}
