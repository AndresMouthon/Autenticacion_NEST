import { IsEnum, IsNotEmpty, IsString } from "class-validator";
import { Rol } from "src/rol/entities/rol.entity";
import { Genero } from "../utils/enums/genero.enum";

export class CreateEmpleadoDto {

    @IsNotEmpty({ message: 'El documento es requerido' })
    @IsString({ message: 'El documento debe ser un string' })
    documento: string;

    @IsNotEmpty({ message: 'El nombre es requerido' })
    @IsString({ message: 'El nombre debe ser un string' })
    nombres: string;

    @IsNotEmpty({ message: 'El apellido es requerido' })
    @IsString({ message: 'El apellido debe ser un string' })
    apellidos: string;

    @IsEnum(Genero, { message: 'El género no es válido' })
    @IsNotEmpty({ message: 'El género es requerido' })
    genero: Genero;

    @IsNotEmpty({ message: 'La fecha de nacimiento es requerida' })
    @IsString({ message: 'La fecha de nacimiento debe ser un string' })
    fecha_nacimiento: string;

    @IsNotEmpty({ message: 'El rol es requerido' })
    rol_id: Rol;
};
