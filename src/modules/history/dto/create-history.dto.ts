import { IsNotEmpty, IsString } from "class-validator";

export class CreateHistoryDto {
   products:number[]
    @IsNotEmpty()
    user: number;
}
