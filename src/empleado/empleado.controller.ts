import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/config/jwt-auth.guard';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { UpdateEmpleadoDto } from './dto/update-empleado.dto';
import { EmpleadoService } from './empleado.service';

@Controller('api/empleado')
// Seguridad de token por controlador
@UseGuards(JwtAuthGuard)
export class EmpleadoController {
  constructor(private readonly empleadoService: EmpleadoService) { }

  @Post()
  async create(@Body() createEmpleadoDto: CreateEmpleadoDto) {
    const empleado = await this.empleadoService.create(createEmpleadoDto);
    return {
      status: true,
      empleado,
    };
  };

  @Get()
  // Seguridad de token por peticion
  // @UseGuards(JwtAuthGuard)
  findAll() {
    return this.empleadoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.empleadoService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateEmpleadoDto: UpdateEmpleadoDto) {
    await this.empleadoService.update(+id, updateEmpleadoDto);
    return {
      status: true,
      message: 'Empleado actualizado',
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.empleadoService.remove(+id);
  }
}
