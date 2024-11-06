import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PermisoModule } from 'src/permiso/permiso.module';
import { UsuarioModule } from 'src/usuario/usuario.module';
import { Rol } from './entities/rol.entity';
import { RolController } from './rol.controller';
import { RolService } from './rol.service';

@Module({
  imports: [TypeOrmModule.forFeature([Rol]), UsuarioModule, PermisoModule],
  controllers: [RolController],
  providers: [RolService],
  exports: [RolService]
})
export class RolModule { }
