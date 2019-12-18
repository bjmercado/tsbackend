import express from 'express';

import controllers from '../controllers/';

class UserRoutes{
    public router: express.Router = express.Router();

    constructor(){
        this.config();
    }

    public config(): void {
        this.router.post('/login', controllers.UserController.login);
        this.router.get('/getusers', controllers.UserController.getUsers);
        this.router.post('/storeusers', controllers.UserController.storeUsers);
    }
}

export default new UserRoutes().router;