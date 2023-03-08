import { Module } from '@nestjs/common';
import { FinanciacionService } from './financiacion.service';
import { FinanciacionController } from './financiacion.controller';

@Module({
  controllers: [FinanciacionController],
  providers: [FinanciacionService]
})
export class FinanciacionModule {}
