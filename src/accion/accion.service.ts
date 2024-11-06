import { Injectable } from '@nestjs/common';
import { CreateAccionDto } from './dto/create-accion.dto';
import { UpdateAccionDto } from './dto/update-accion.dto';

@Injectable()
export class AccionService {
  create(createAccionDto: CreateAccionDto) {
    return 'This action adds a new accion';
  }

  findAll() {
    return `This action returns all accion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} accion`;
  }

  update(id: number, updateAccionDto: UpdateAccionDto) {
    return `This action updates a #${id} accion`;
  }

  remove(id: number) {
    return `This action removes a #${id} accion`;
  }
}
