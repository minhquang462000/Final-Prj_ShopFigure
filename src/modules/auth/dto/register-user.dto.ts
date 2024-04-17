import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from "class-validator";

export class RegisterUserDto {
   @ApiProperty()
   @IsString() 
   @MinLength(6)
   @MaxLength(20)
   @IsNotEmpty()
   name: string;
@ApiProperty()
   @IsString() 
   @MinLength(6)
   @MaxLength(20)
   @IsNotEmpty()
   password: string;
@ApiProperty()
   @IsEmail() 
   @MinLength(6)
   @MaxLength(30)
   @IsNotEmpty()
   email: string;
@ApiProperty()
   @IsNumber()
   @IsNotEmpty()
   status: number;
}
