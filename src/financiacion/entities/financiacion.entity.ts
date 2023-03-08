import { Schema } from "@nestjs/mongoose";
import { Prop, SchemaFactory } from "@nestjs/mongoose/dist";
import { ApiProperty } from "@nestjs/swagger";
import {Document } from "mongoose";


@Schema()
export class Financiacion extends Document {
    
    @Prop()
    user_id:string;
    
    @Prop()
    fecha:string;
     
    @Prop()
    cant_finaciacion:string;   

    @Prop()
    inversionista:string; 

    @Prop()
    busqueda_inversion:boolean; 
}

export const FinanciacionSchema = SchemaFactory.createForClass(Financiacion);
