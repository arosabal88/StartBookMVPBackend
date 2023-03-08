import { ApiProperty } from '@nestjs/swagger/dist';
import { IsEmail, IsOptional, IsString, Matches, MaxLength, MinLength } from 'class-validator';
export class CreateEmpresaDto {
     
    @ApiProperty()
    @IsString()
    user_id:string;

    @ApiProperty()
    @IsString()
    nombre_startup:string;

    @ApiProperty()
    @IsString()
    NIT:string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    pais_sede:string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    ciudad:string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    direccion:string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    telefono:string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    sitio_web:string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    linkedin:string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    instagram:string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    twitter:string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    facebook:string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    id_contacto_principal:string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    nombre_contacto_principal:string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    correo_contacto_principal:string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    telefono_contacto_principal:string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    pais_contacto_principal:string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    ciudad_contacto_principal:string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    direccion_contacto_principal:string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    rol_contacto_principal:string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    expectativa:string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    sector:string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    tiempo_de_operacion:string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    empleos_directos:string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    primera_vez:boolean;

    @ApiProperty()
    @IsString()
    @IsOptional()
    acelerada:boolean;

    @ApiProperty()
    @IsString()
    @IsOptional()
    escalable_nacional:string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    escalable_internacional:string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    tamaño_mercado_medianoplazo:string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    tipo_modelo_negocio:string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    ingresos_arr:string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    canales:string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    liquidez:string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    contabilidad:string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    utilidad_bruta:string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    utilidad_neta:string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    crecimiento:string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    oportunidades_y_retos:string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    participar_en_rondas:string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    oportunidad_identificada:string;
    
    @ApiProperty()
    @IsString()
    @IsOptional()
    propuesta_de_valor:string;
    
    @ApiProperty()
    @IsString()
    @IsOptional()
    porque_tu_equipo:string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    como_genera_ingresos:string;
    
    @ApiProperty()
    @IsString()
    @IsOptional()
    adquisicion_empresa:string[];
    
    @ApiProperty()
    @IsString()
    @IsOptional()
    fusionado:string[];

    @ApiProperty()
    @IsString()
    @IsOptional()
    perfiles_contratados:string;


}
