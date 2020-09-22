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
        this.router.post('/viewusers/:id', controllers.UserController.viewUsers);
        this.router.put('/updateusers/:id', controllers.UserController.updateUsers);
        this.router.delete('/deleteusers/:id', controllers.UserController.deleteUsers);
    }
}

export default new UserRoutes().router;