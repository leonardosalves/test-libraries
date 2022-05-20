import { getRepository, getConnection } from "typeorm"
import { NextFunction, Request, Response } from "express"
import { AppDataSource } from "../data-source"
import { Paises } from './../entity/Paises';

export class PaisesController {
    private paisesRepository = AppDataSource.getRepository(Paises)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.paisesRepository.find()
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const {
            numcode
        } = request.params
        return this.paisesRepository.findOne({
            where:{
                numcode : Number(numcode)
            }
        })
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.paisesRepository.save(request.body)
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        const {
            numcode
        } = request.params
        let paisToRemove = await this.paisesRepository.findOneBy({ numcode: Number(numcode) })
        await this.paisesRepository.remove(paisToRemove)
    }

}