import { Entity, PrimaryColumn, Column } from "typeorm"

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
    nome_en: string

    @Column()
    nome_fr: string
    
    @Column()
    nome_es: string
    
    @Column()
    iso_correios: string
}
