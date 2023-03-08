import { PartialType } from '@nestjs/swagger';
import { CreateFinanciacionDto } from './create-financiacion.dto';

export class UpdateFinanciacionDto extends PartialType(CreateFinanciacionDto) {}
