import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity()
export class Congregacoes{
    @PrimaryColumn()
    id_congregacoes: number

    @Column()
    id_areas: number

    @Column()
    congregacao: string

    @Column()
    ativo: string

    @Column()
    sede_area: string

    @Column()
    id_pessoas_encarregado: number

    @Column()
    id_pessoas_secretario: number

    @Column()
    id_pessoas_tesoureiro: number

    @Column()
    id_pessoas_juventude: number

    @Column()
    id_pessoas_uniao_feminina: number

    @Column()
    id_pessoas_missoes: number
    
    @Column()
    id_pessoas_diacono: number

    @Column()
    id_pessoas_diaconisa: number

    @Column()
    id_pessoas_presidio: number

    @Column()
    id_pessoas_ensino: number

    @Column()
    id_pessoas_musica: number

    @Column()
    endereco_pais: string

    @Column()
    endereco_cep: string

    @Column()
    endereco_bairro: string

    @Column()
    endereco_cidade: string

    @Column()
    endereco_estado: string

    @Column()
    endereco_logradouro: string

    @Column()
    endereco_numero: string

    @Column()
    endereco_complemento: string

    @Column()
    endereco_latitude: string

    @Column()
    endereco_logitude: string

    @Column()
    url_site: string

    @Column()
    foto_fachada: string

    @Column()
    foto_interna: string

    @Column()
    data_fundacao: Date

    @Column()
    data_encerramento: Date

    @Column()
    data_transferencia: Date

    @Column()
    nome_encarregado: string

    @Column()
    contato: string

    @Column()
    datahora_atualizacao: Date

    @Column()
    datahora_cadastro: Date

    @Column()
    observacoes: string

    @Column()
    id_congregacao_church: number

    @Column()
    id_congregacoes_anterior: number

    @Column()
    id_congregacoes_posteriror: number

    @Column()
    publica_site: string
}