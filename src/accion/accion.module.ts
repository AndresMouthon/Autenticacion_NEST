import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PermisoModule } from 'src/permiso/permiso.module';
import { AccionController } from './accion.controller';
import { AccionService } from './accion.service';
import { Accion } from './entities/accion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Accion]), PermisoModule],
  controllers: [AccionController],
  providers: [AccionService],
})
export class AccionModule { }
