import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { compare } from 'bcrypt';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { Repository } from 'typeorm';
import { CreateAuthDto } from './dto/create-auth.dto';

@Injectable()
export class AuthService {

  constructor(
    @InjectRepository(Usuario) private usuarioRepository: Repository<Usuario>,
    private JwtService: JwtService,
  ) { };

  async login(usuarioLogin: CreateAuthDto) {
    const { documento, password } = usuarioLogin;
    const user = await this.usuarioRepository.findOne({ where: { documento }, relations: ['rol', 'empleado', 'rol.permiso.accion', 'rol.permiso.accion.sub_item'] });
    if (!user) return { status: false, message: 'El usuario no existe' };
    const checkPassword = await compare(password, user.password);
    if (!checkPassword) return { status: false, message: 'La contraseña es incorrecta' };
    const payload = { id: user.id, usuario: user.documento };
    const token = this.JwtService.sign(payload);
    const rol = { id: user.rol.id, descripcion: user.rol.descripcion }
    const userLogin = { documento: documento, ...user.empleado };
    return {
      status: true,
      usuaio: userLogin,
      rol,
      acciones: user.rol.permiso,
      token
    };
  };
};
