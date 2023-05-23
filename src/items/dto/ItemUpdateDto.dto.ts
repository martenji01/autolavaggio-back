import { IsBoolean, IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { ItemCreateDto } from "./ItemCreateDto.dto";

export class ItemUpdateDto extends ItemCreateDto {

    @IsOptional()
    @IsString()
    readonly name: string;

    @IsOptional()
    @IsBoolean()
    isActive: boolean;

}
