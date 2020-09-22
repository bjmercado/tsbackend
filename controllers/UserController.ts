import express from 'express';

import UserRepo from '../repositories/UserRepo';

class UserController{
    public async login(req: express.Request, res: express.Response): Promise<express.Response>{
        const data = await UserRepo.userLogin(req.body);
        return res.json({responseData: data});
    }

    public async getUsers(req: express.Request, res: express.Response): Promise<express.Response>{
        const data = await UserRepo.allUsers();
        return res.json({responseData: data});
    }

    public async storeUsers(req: express.Request, res: express.Response): Promise<express.Response>{
        const data = await UserRepo.addUsers(req.body);
        return res.json({responseData: data});
    }

    public async viewUsers(req: express.Request, res: express.Response): Promise<express.Response>{
        const data = await UserRepo.findUser(parseInt(req.params.id));
        return res.json({responseData: data});
    }

    public updateUsers(req: express.Request, res: express.Response){
        console.log(req.body);
    }

    public async deleteUsers(req: express.Request, res: express.Response): Promise<express.Response>{
        const data = await UserRepo.removeUser(parseInt(req.params.id));
        return res.json({responseData: data});
    }
}

export default UserController;
