import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { hash } from 'bcrypt';
import { Repository } from 'typeorm';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuarioService {

  constructor(@InjectRepository(Usuario) private usuarioRepository: Repository<Usuario>) { }

  async create(createUsuarioDto: CreateUsuarioDto) {
    const { password } = createUsuarioDto;
    const hashedPassword = await hash(password, 10);
    createUsuarioDto = { ...createUsuarioDto, password: hashedPassword };
    return await this.usuarioRepository.save(createUsuarioDto);
  };

  async findUsuarioByDocumento(documento: string) {
    return await this.usuarioRepository.findOne({ where: { documento } });
  };

  findAll() {
    return `This action returns all usuario`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usuario`;
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
