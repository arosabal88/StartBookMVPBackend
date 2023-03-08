import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { EmpleosService } from './empleos.service';
import { CreateEmpleoDto } from './dto/create-empleo.dto';
import { UpdateEmpleoDto } from './dto/update-empleo.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@ApiTags('Empleos')
@Controller('empleos')
export class EmpleosController {
  constructor(private readonly empleosService: EmpleosService) {}
// -----------------------------------------------------
  @Post('create')
  create(@Body() createEmpleoDto: CreateEmpleoDto) {
    return this.empleosService.create(createEmpleoDto);
  }
// -----------------------------------------------------
  @Get()
  @ApiResponse({status: 201, description:'FindAll succesfully'})
  @ApiResponse({status:400 , description: 'Bad Request'})
  @ApiResponse({status: 403 , description :'Forbidden'})
  findAll(@Query() paginationDto: PaginationDto) {
    return this.empleosService.findAll(paginationDto);
  }
// -----------------------------------------------------
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.empleosService.findById(id);
  }
// -----------------------------------------------------
  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateEmpleoDto: UpdateEmpleoDto) {
  //   return this.empleosService.update(+id, updateEmpleoDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.empleosService.remove(+id);
  // }
}
