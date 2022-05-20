import { Entity, PrimaryColumn, Column } from "typeorm"

@Entity()
export class Users {

    @PrimaryColumn()
    id_users: number

    @Column()
    id_users_group: number

    @Column()
    name: string

    @Column()
    email: string

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
    financeiro_meta_numero_dias: number
}
