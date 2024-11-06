import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRolDto } from './dto/create-rol.dto';
import { UpdateRolDto } from './dto/update-rol.dto';
import { Rol } from './entities/rol.entity';

@Injectable()
export class RolService {

  constructor(@InjectRepository(Rol) private rolRepository: Repository<Rol>) { }

  async create(createRolDto: CreateRolDto) {
    return await this.rolRepository.save(createRolDto);
  }

  findAll() {
    return `This action returns all rol`;
  }

  async findOne(id: number) {
    return await this.rolRepository.findOne({ where: { id } });
  }

  update(id: number, updateRolDto: UpdateRolDto) {
    return `This action updates a #${id} rol`;
  }

  remove(id: number) {
    return `This action removes a #${id} rol`;
  }
}
