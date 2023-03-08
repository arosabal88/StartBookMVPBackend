import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { CreateEmpleoDto } from './dto/create-empleo.dto';
import { UpdateEmpleoDto } from './dto/update-empleo.dto';
import { Empleo } from './entities/empleo.entity';

@Injectable()
export class EmpleosService {
    // -----------------------------------------------------
    constructor(
      @InjectModel( Empleo.name )
      private readonly empleoModel: Model<Empleo>,
      ) {}
      // -----------------------------------------------------
      async create(createEmpleoDto: CreateEmpleoDto) {
        try {
          const empleoCreated = await this.empleoModel.create(createEmpleoDto);
          return 'Empleo creado!!!'; 
        } catch (error) {
          console.log(error);
          // this.handleExceptions( error );
        }
      }
 // -----------------------------------------------------
    async findAll(paginationDto:PaginationDto) { 
      try {
        const { limit = 10, offset = 0 } = paginationDto;
        return await this.empleoModel.find()
        .limit( limit )
        .skip( offset )
        .sort({
          no: 1
        })
        .select('-__v');
      } catch (error) {
        console.log(error);
        ;
      }
    }
// -----------------------------------------------------
    async findById(id:string) {
      return await this.empleoModel.findById(id,{__v:false})
    }
// -----------------------------------------------------
  // update(id: number, updateEmpleoDto: UpdateEmpleoDto) {
  //   return `This action updates a #${id} empleo`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} empleo`;
  // }
}
