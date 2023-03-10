import { Module } from '@nestjs/common';
import { FinanciacionService } from './financiacion.service';
import { FinanciacionController } from './financiacion.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Financiacion, FinanciacionSchema } from './entities/financiacion.entity';

@Module({
  controllers: [FinanciacionController],
  imports:[MongooseModule.forFeature([
    {
      name: Financiacion.name,
      schema: FinanciacionSchema
    }
  ])],
  providers: [FinanciacionService],
  
})
export class FinanciacionModule {}

