import { PartialType } from '@nestjs/mapped-types';
import { CreateEmpleadoDto } from './create-empleado.dto';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { Genero } from '../utils/enums/genero.enum';
import { Rol } from 'src/rol/entities/rol.entity';

export class UpdateEmpleadoDto extends PartialType(CreateEmpleadoDto) {

    @IsString({ message: 'El documento debe ser un string' })
    @IsOptional()
    documento?: string;

    @IsString({ message: 'El nombre debe ser un string' })
    @IsOptional()
    nombres?: string;

    @IsString({ message: 'El apellido debe ser un string' })
    @IsOptional()
    apellidos?: string;

    @IsEnum(Genero, { message: 'El género no es válido' })
    @IsOptional()
    genero?: Genero;

    @IsString({ message: 'La fecha de nacimiento debe ser un string' })
    @IsOptional()
    fecha_nacimiento?: string;

    @IsOptional()
    rol_id?: Rol;
};
