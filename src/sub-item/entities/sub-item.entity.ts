import { Accion } from "src/accion/entities/accion.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: "sub-items" })
export class SubItem {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 100 })
    accion: string;

    @Column({ type: "varchar", length: 100 })
    clave: string;

    @Column({ type: "varchar", length: 100 })
    ruta: string;

    @Column({ type: "varchar", length: 100, nullable: true })
    icono: string;

    @ManyToOne(() => Accion, (accion) => accion.sub_item)
    @JoinColumn({ name: 'accion_id' })
    item: Accion;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
};
