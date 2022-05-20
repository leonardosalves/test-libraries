import { getRepository } from "typeorm"
import { NextFunction, Request, Response } from "express"
import { Congregacoes } from '../entity/Congregacoes';
import { AppDataSource } from "../data-source";

export class CongregacoesController {

    private congregacoesRepository = AppDataSource.getRepository(Congregacoes)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.congregacoesRepository.find()
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const {
            id_congregacoes
        } = request.params
        return this.congregacoesRepository.findOne({
            where: {
                id_congregacoes: Number(id_congregacoes)
            }
        })
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.congregacoesRepository.save(request.body)
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        const {
            id_congregacoes
        } = request.params
        let congregacaoToRemove = await this.congregacoesRepository.findOneBy({ 
              id_congregacoes: Number(id_congregacoes) 
           
        })
        await this.congregacoesRepository.remove(congregacaoToRemove)
    }

}