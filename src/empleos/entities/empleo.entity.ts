import { Schema } from "@nestjs/mongoose";
import { Prop, SchemaFactory } from "@nestjs/mongoose/dist";
import { ApiProperty } from "@nestjs/swagger";
import {Document } from "mongoose";


@Schema()
export class Empleo extends Document {
    
    @Prop()
    empresa_id:string;
    
    @Prop()
    fecha:string;
     
    @Prop()
    empleos:string;   

    @Prop()
    perfiles:string; 
}

export const EmpleoSchema = SchemaFactory.createForClass(Empleo);
