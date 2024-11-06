import { IsNotEmpty } from "class-validator";

export class CreateRolDto {
    @IsNotEmpty({ message: 'El rol es requerido' })
    descripcion: string;
};
