import { Usuario } from "src/usuario/entities/usuario.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Genero } from "../utils/enums/genero.enum";

@Entity({ name: "empleados" })
export class Empleado {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 100 })
    nombres: string;

    @Column({ type: "varchar", length: 100 })
    apellidos: string;

    @Column({ type: "enum", enum: Genero })
    genero: Genero;

    @Column({ type: "varchar", length: 20 })
    fecha_nacimiento: string;

    @OneToOne(() => Usuario, (usuario) => usuario.empleado)
    @JoinColumn({ name: "usuario_id" })
    usuario: Usuario;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

};
