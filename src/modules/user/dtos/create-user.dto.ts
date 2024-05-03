import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNotEmpty, IsNumber, IsString, IsUrl, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MaxLength(20)
    @MinLength(6)
    name: string;
@ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MaxLength(20)
    @MinLength(6)
    password: string;
@ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MaxLength(50)
    @MinLength(10)
    email: string;
    @IsNumber()
    @IsNotEmpty()
    status: number;
@ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    role: number;
    @IsArray()
    posts: number[];
    @IsUrl()
avatar: string
}

