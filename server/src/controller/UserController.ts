import { getRepository, getConnection } from "typeorm"
import { NextFunction, Request, Response } from "express"
import { Users } from "../entity/Users"
import { AppDataSource } from "../data-source"

export class UserController {
    private usersRepository = AppDataSource.getRepository(Users)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.usersRepository.find()
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const {
            id_users
        } = request.params
        return this.usersRepository.findOne({
            where:{
                id_users : Number(id_users)
            }
        })
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.usersRepository.save(request.body)
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        const {
            id_users
        } = request.params
        let userToRemove = await this.usersRepository.findOneBy({ id_users: Number(id_users) })
        await this.usersRepository.remove(userToRemove)
    }

}