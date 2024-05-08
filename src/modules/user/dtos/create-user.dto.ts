import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNotEmpty, IsNumber, IsString, IsUrl, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
   name: string;
}

