import { Module } from '@nestjs/common';
import { EmpleosService } from './empleos.service';
import { EmpleosController } from './empleos.controller';
import { Empleo, EmpleoSchema } from './entities/empleo.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [EmpleosController],
  providers: [EmpleosService],
  imports:[MongooseModule.forFeature([
    {
      name: Empleo.name,
      schema: EmpleoSchema
    }
  ]),]
})
export class EmpleosModule {}
