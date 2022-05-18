import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Users {

    @PrimaryGeneratedColumn()
    id_users: number

    @Column()
    id_users_group: number

    @Column()
    name: string

    @Column()
    email: number

    @Column()
    login: string
    
    @Column()
    pass: string

    @Column()
    blocked: string

    @Column()
    permissions: string

    @Column()
    last_access: Date

    @Column()
    last_ip: string
    
    @Column()
    system: string
    
    @Column()
    change_pass: string

    @Column()
    financeiro_meta_mensal: number

    @Column()
    financeiro_meta_diaria: number

    @Column()
    financeiro_numero_dias: number

}
