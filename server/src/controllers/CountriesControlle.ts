import { Request, Response } from "express";
import { AppDataSource } from "../data-source"
import { getMongoManager } from "typeorm";

import { Paises } from "../entity/Paises";

const connect = AppDataSource
const manager = getMongoManager()

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default  {
    async all(request: Request, response: Response){
        try {
            const paises = await connect.manager
            .find(Paises)

        return response.status(200).json(paises)
        } catch (error) {
            console.error(error)
            return response.status(500).send(error)
        }
    }
}