import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RolService } from 'src/rol/rol.service';
import { UsuarioService } from 'src/usuario/usuario.service';
import { Repository } from 'typeorm';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { UpdateEmpleadoDto } from './dto/update-empleado.dto';
import { Empleado } from './entities/empleado.entity';

@Injectable()
export class EmpleadoService {

  constructor(
    @InjectRepository(Empleado) private empleadoRepository: Repository<Empleado>,
    private usuarioService: UsuarioService,
    private rolService: RolService,
  ) { }

  async create(createEmpleadoDto: CreateEmpleadoDto) {
    const errors = [];
    const rol = await this.rolService.findOne(Number(createEmpleadoDto.rol_id));
    if (!rol) errors.push('El rol no existe.');
    const user = await this.usuarioService.findUsuarioByDocumento(createEmpleadoDto.documento);
    if (user) errors.push('El usuario ya existe.');
    if (errors.length) throw new HttpException({ status: false, errors }, HttpStatus.BAD_REQUEST);
    const usuario = await this.usuarioService.create({
      documento: createEmpleadoDto.documento,
      password: createEmpleadoDto.documento,
      rol: createEmpleadoDto.rol_id,
    });
    const nuevoEmpleado = await this.empleadoRepository.create({
      ...createEmpleadoDto, usuario
    });
    return await this.empleadoRepository.save(nuevoEmpleado);
  };

  async findAll() {
    return await this.empleadoRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} empleado`;
  }

  async update(id: number, updateEmpleadoDto: UpdateEmpleadoDto) {
    const empleadoActualizar = await this.empleadoRepository.findOne({ where: { id } });
    if (!empleadoActualizar) throw new HttpException({ status: false, errors: 'empleado no encontrado' }, HttpStatus.NOT_FOUND);
    const errors = [];
    const user = await this.usuarioService.findUsuarioByDocumento(updateEmpleadoDto.documento);
    if (user && user.documento !== empleadoActualizar.usuario.documento) errors.push('El número de documento ya está en uso por otro usuario.');
  };

  remove(id: number) {
    return `This action removes a #${id} empleado`;
  }
}
