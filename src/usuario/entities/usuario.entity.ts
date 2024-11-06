import { Empleado } from "src/empleado/entities/empleado.entity";
import { Rol } from "src/rol/entities/rol.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: "usuarios" })
export class Usuario {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 20, unique: true })
    documento: string;

    @Column({ type: "varchar", length: 100 })
    password: string;

    @ManyToOne(() => Rol, (rol) => rol.usuario)
    @JoinColumn({ name: "rol_id" })
    rol: Rol;

    @OneToOne(() => Empleado, (empleado) => empleado.usuario, { nullable: false, eager: true })
    empleado: Empleado;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
};
