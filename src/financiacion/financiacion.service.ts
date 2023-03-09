import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateFinanciacionDto } from './dto/create-financiacion.dto';
import { UpdateFinanciacionDto } from './dto/update-financiacion.dto';
import { Financiacion } from './entities/financiacion.entity';

@Injectable()
export class FinanciacionService {
  constructor(
    @InjectModel( Financiacion.name )
    private readonly financiacionModel: Model<Financiacion>,
    ) {}
  // -----------------------------------------------------
    async create(createFinanciacionDto: CreateFinanciacionDto) {
      try {
        const empleoCreated = await this.financiacionModel.create(createFinanciacionDto);
        return 'Financiacion creado!!!'; 
      } catch (error) {
        console.log(error);
        // this.handleExceptions( error );
      }
    }
// -----------------------------------------------------
  findAll() {
    return `This action returns all financiacion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} financiacion`;
  }

  update(id: number, updateFinanciacionDto: UpdateFinanciacionDto) {
    return `This action updates a #${id} financiacion`;
  }

  remove(id: number) {
    return `This action removes a #${id} financiacion`;
  }
}
