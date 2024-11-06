import { Permiso } from "src/permiso/entities/permiso.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { TypeAccion } from "../utils/enums/type_accion.enum";
import { SubItem } from "src/sub-item/entities/sub-item.entity";

@Entity({ name: "acciones" })
export class Accion {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 100 })
    accion: string;

    @Column({ type: "varchar", length: 100 })
    clave: string;

    @Column({ type: "varchar", length: 100 })
    ruta: string;

    @Column({type: "varchar", length: 100, nullable: true})
    icono: string;

    @Column({ type: "enum", enum: TypeAccion })
    type: TypeAccion;

    @OneToMany(() => Permiso, (permiso) => permiso.accion)
    permiso: Permiso[];

    @OneToMany(() => SubItem, (sub_item) => sub_item.item)
    sub_item: SubItem[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
};
