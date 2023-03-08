import { Schema } from "@nestjs/mongoose";
import { Prop, SchemaFactory } from "@nestjs/mongoose/dist";
import { ApiProperty } from "@nestjs/swagger";
import { Document } from "mongoose";


@Schema()
export class Empresa extends Document {
    
    // @ApiProperty()

    @Prop({
        unique: true,
        index:true
    })
    user_id:string;
    
    @Prop({
        unique: true,
        index:true
    })
    nombre_startup:string;
     
    @Prop({
        unique: true,
        index:true
    })
    NIT:string;   
     
    @Prop()
    pais_sede:string;    
     
    @Prop()
    ciudad:string;
     
    @Prop()
    direccion:string;

    @Prop()
    telefono:string;

    @Prop()
    sitio_web:string;

    @Prop()
    linkedin:string;

    @Prop()
    instagram:string;

    @Prop()
    twitter:string;

    @Prop()
    facebook:string;

    @Prop()
    id_contacto_principal:string;
    
    @Prop()
    nombre_contacto_principal:string;

    @Prop()
    correo_contacto_principal:string;
    
    @Prop()
    telefono_contacto_principal:string;

    @Prop()
    pais_contacto_principal:string;

    @Prop()
    ciudad_contacto_principal:string;
    
    @Prop()
    direccion_contacto_principal:string;

    @Prop()
    rol_contacto_principal:string;
    
    @Prop()
    expectativa:string;

    @Prop()
    sector:string;

    @Prop()
    tiempo_de_operacion:string;

    @Prop()
    empleos_directos:string;

    @Prop()
    primera_vez:boolean;

    @Prop()
    acelerada:boolean;

    @Prop()
    escalable_nacional:string;

    @Prop()
    escalable_internacional:boolean;

    @Prop()
    tamaño_mercado_medianoplazo:string;

    @Prop()
    tipo_modelo_negocio:string;

    @Prop()
    ingresos_arr:string;

    @Prop()
    canales:string;

    @Prop()
    liquidez:boolean;

    @Prop()
    contabilidad:string;

    @Prop()
    utilidad_bruta:string;

    @Prop()
    utilidad_neta:string;
    
    @Prop()
    crecimiento:string;
    
    @Prop()
    oportunidades_y_retos:string;

    @Prop()
    participar_en_rondas:string;

    @Prop()
    oportunidad_identificada:string;

    @Prop()
    propuesta_de_valor:string;

    @Prop()
    porque_tu_equipo:string;

    @Prop()
    como_genera_ingresos:string;

    @Prop({
        // default:['user']
    })
    adquisicion_empresa: string[];

    @Prop()
    fusionado:string[];

    @Prop()
    perfiles_contratados:string;

  
}

export const EmpresaSchema = SchemaFactory.createForClass(Empresa);
