import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import usersroutes from '../routes/usersroutes';

class App {
    public app: express.Application;

    constructor(){
        this.app = express();
        this.middleware();
        this.routes();
        this.serve();
    }

    private middleware(): void {
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: true}));
    }

    private routes(): void {
        this.app.use('/users/api', usersroutes);
    }

    private serve(): void {
        const port: number = 8080;
        this.app.listen(port, () => {
            console.log(`server now listening on port ${port}`);
        });
    }
}

export default new App().app;