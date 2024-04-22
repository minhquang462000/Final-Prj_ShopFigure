import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class LoginUserDto {
    @ApiProperty()
    @IsEmail()
    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(50)
    email: string;
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(20)
    password: string;
}