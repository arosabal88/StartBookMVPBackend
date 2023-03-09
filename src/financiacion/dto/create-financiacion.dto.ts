import { ApiProperty } from '@nestjs/swagger/dist';
import { IsBoolean, IsEmail, IsOptional, IsString, Matches, MaxLength, MinLength } from 'class-validator';
export class CreateFinanciacionDto  {
     
    @ApiProperty()
    @IsString()
    user_id:string;

    @ApiProperty()
    @IsString()
    fecha:string;

    @ApiProperty()
    @IsString()
    cant_finaciacion:string;   

    @ApiProperty()
    @IsString()
    @IsOptional()
    inversionista:string

    @ApiProperty()
    @IsBoolean()
    busqueda_inversion:boolean;  

}
