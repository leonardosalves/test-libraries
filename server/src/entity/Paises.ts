import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Paises {

    @PrimaryColumn()
    numcode: number

    @Column()
    iso: string

    @Column()
    iso3: string

    @Column()
    nome: string

    @Column()
    iso_correios: string

}