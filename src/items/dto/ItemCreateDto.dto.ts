import { IsNotEmpty, IsString } from "class-validator";

export class ItemCreateDto {
    @IsNotEmpty()
    @IsString()
    readonly name: string;

}
