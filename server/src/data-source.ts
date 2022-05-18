import "reflect-metadata"
import { DataSource } from "typeorm"
import { Users } from "./entity/Users"
import { Congregacoes } from './entity/Congregacoes';

export const AppDataSource = new DataSource({
    name:'default',
    type: "mongodb",
    database: "restaurasys",
    synchronize: true,
    logging: false,
    entities: [Users, Congregacoes],
    migrations: [],
    subscribers: [],
})
