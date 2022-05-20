import "reflect-metadata"
import { DataSource } from "typeorm"
import { Users } from "./entity/Users"
import { Congregacoes } from './entity/Congregacoes';
import { Paises } from './entity/Paises';

export const AppDataSource = new DataSource({
    type: "mongodb",
    database: "restaurasys",
    synchronize: true,
    logging: false,
    entities: [Users, Congregacoes, Paises],
    migrations: [],
    subscribers: [],
})
