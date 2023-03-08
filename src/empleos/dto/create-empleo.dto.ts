import { ApiProperty } from '@nestjs/swagger/dist';
import { IsEmail, IsOptional, IsString} from 'class-validator';

export class CreateEmpleoDto {
     
    @ApiProperty()
    @IsString()
    empresa_id:string;

    @ApiProperty()
    @IsString()
    fecha:string;

    @ApiProperty()
    @IsString()
    empleos:string;

    @ApiProperty()
    @IsString()
    perfiles:string
}
