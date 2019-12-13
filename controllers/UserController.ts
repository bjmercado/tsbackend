import express from 'express';

import UserRepo from '../repositories/UserRepo';

class UserController{
    public async login(req: express.Request, res: express.Response): Promise<express.Response>{
        const data = await UserRepo.userLogin(req.body);
        return res.json({responseData: data});
    }

    public async getUsers(re: express.Request, res: express.Response): Promise<express.Response>{
        const data = await UserRepo.allUsers();
        return res.json({responseData: data});
    }
}

export default UserController;
