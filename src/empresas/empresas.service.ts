import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';
import { Empresa } from './entities/empresa.entity';

@Injectable()
export class EmpresasService {
  
  // -----------------------------------------------------
  constructor(
    @InjectModel( Empresa.name )
    private readonly empresaModel: Model<Empresa>,
    ) {}
    // -----------------------------------------------------
    async create(createEmpresaDto: CreateEmpresaDto) {
      try {
        const empresaCreated = await this.empresaModel.create(createEmpresaDto);
        return 'Empresa creada!!!'; 
      } catch (error) {
        this.handleExceptions( error );
      }
    }
    // -----------------------------------------------------
    async findAll(paginationDto:PaginationDto) { 
      try {
        const { limit = 10, offset = 0 } = paginationDto;
        return await this.empresaModel.find()
        .limit( limit )
        .skip( offset )
        .sort({
          no: 1
        })
        .select('-__v');
      } catch (error) {
        this.handleExceptions( error );
      }
    }
    // -----------------------------------------------------
    async findById(id:string) {
      return await this.empresaModel.findById(id,{__v:false})
    }
    // -----------------------------------------------------
    private handleExceptions( error: any ) {
      if ( error.code === 11000 ) {
        throw new BadRequestException(`User exists in db ${ JSON.stringify( error.keyValue ) }`);
    }
    console.log(error);
    throw new InternalServerErrorException(`Can't create User - Check server logs`);
  }
 // -----------------------------------------------------

}