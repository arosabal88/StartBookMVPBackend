import { Injectable } from '@nestjs/common';
import { CreateFinanciacionDto } from './dto/create-financiacion.dto';
import { UpdateFinanciacionDto } from './dto/update-financiacion.dto';

@Injectable()
export class FinanciacionService {
  create(createFinanciacionDto: CreateFinanciacionDto) {
    return 'This action adds a new financiacion';
  }

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
