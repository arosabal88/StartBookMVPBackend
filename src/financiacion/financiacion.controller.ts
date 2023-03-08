import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FinanciacionService } from './financiacion.service';
import { CreateFinanciacionDto } from './dto/create-financiacion.dto';
import { UpdateFinanciacionDto } from './dto/update-financiacion.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Financiacion')
@Controller('financiacion')
export class FinanciacionController {
  constructor(private readonly financiacionService: FinanciacionService) {}

  @Post('create')
  create(@Body() createFinanciacionDto: CreateFinanciacionDto) {
    return this.financiacionService.create(createFinanciacionDto);
  }

  @Get()
  findAll() {
    return this.financiacionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.financiacionService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateFinanciacionDto: UpdateFinanciacionDto) {
  //   return this.financiacionService.update(+id, updateFinanciacionDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.financiacionService.remove(+id);
  // }
}
