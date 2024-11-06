import { IsNotEmpty } from "class-validator";
import { Rol } from "src/rol/entities/rol.entity";

export class CreateUsuarioDto {

    @IsNotEmpty({ message: 'El documento es requerido' })
    documento: string;

    @IsNotEmpty({ message: 'La contraseña es requerida' })
    password: string;

    @IsNotEmpty({ message: 'El rol es requerido' })
    rol: Rol;
};
