import {Request, Response} from 'express';
import prismaClient from '../database/prismaClient';

export class CreateUsersController {
    async handle(request: Request, response: Response) {
        const {name, email, id, cpf, password} = request.body;
        // const user = {
        //     name,
        //     email
        // };
        // return response.json(user);

        const user = await prismaClient.user.create({
            data:{
                name,
                email,
                id,
                cpf,
                password
            }
        }); 
        return response.json({message: 'Hello World'});
    }
}
