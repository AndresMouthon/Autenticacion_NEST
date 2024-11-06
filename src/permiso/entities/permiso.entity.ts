import { Accion } from "src/accion/entities/accion.entity";
import { Rol } from "src/rol/entities/rol.entity";
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('permisos')
export class Permiso {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Rol, (rol) => rol.permiso)
    @JoinColumn({ name: 'rol_id' })
    rol: Rol;

    @ManyToOne(() => Accion, (accion) => accion.permiso)
    @JoinColumn({ name: 'accion_id' })
    accion: Accion;
};
