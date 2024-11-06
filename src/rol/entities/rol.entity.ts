import { Permiso } from "src/permiso/entities/permiso.entity";
import { Usuario } from "src/usuario/entities/usuario.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: "roles" })
export class Rol {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 100 })
    descripcion: string;

    @OneToMany(() => Usuario, (usuario) => usuario.rol)
    usuario: Usuario[];

    @OneToMany(() => Permiso, (permiso) => permiso.rol)
    permiso: Permiso[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
};
