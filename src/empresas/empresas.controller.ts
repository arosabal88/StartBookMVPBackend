import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { EmpresasService } from './empresas.service';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@ApiTags('Empresas')
@Controller('empresas')
export class EmpresasController {
  constructor(private readonly empresasService: EmpresasService) {}

// -----------------------------------------------------
  @Post('create')
  @ApiResponse({status: 201, description:'Empresa Creada'})
  @ApiResponse({status:400 , description: 'Bad Request'})
  @ApiResponse({status: 403 , description :'Forbidden'})
  create(@Body() createEmpresaDto: CreateEmpresaDto) {
     return this.empresasService.create(createEmpresaDto);
  }
// -----------------------------------------------------
  @Get()
  @ApiResponse({status: 201, description:'FindAll succesfully'})
  @ApiResponse({status:400 , description: 'Bad Request'})
  @ApiResponse({status: 403 , description :'Forbidden'})
  findAll(@Query() paginationDto: PaginationDto) {
    return this.empresasService.findAll(paginationDto);
  }
// -----------------------------------------------------

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.empresasService.findById(id);
  }

}
