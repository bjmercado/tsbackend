import dbcon from '../dbcon/aurecondb';
import bcrypt from 'bcryptjs';

import {IUser, ILoginData} from '../interface/IUser';

class UserRepo{

    public async userLogin(data: ILoginData): Promise<boolean>{
        const sql: string = `SELECT * FROM aurecon_users WHERE user_email = '${data.email}'`;
        const result = await dbcon.query(sql);
        const user: IUser[] = JSON.parse(JSON.stringify(result));
        let isAuth: boolean = false;
        if(user.length > 0){
             isAuth =  await bcrypt.compare(data.password, user[0].user_password);
        }else{
            isAuth;
        }
        return isAuth;
    }

    public async allUsers(): Promise<IUser[]>{
        const sql: string = `SELECT * FROM aurecon_users`;
        const result: IUser = await dbcon.query(sql);
        const user: IUser[] = JSON.parse(JSON.stringify(result));
        return user;
    }

    public async addUsers(data: Omit<IUser, 'id'>): Promise<any>{
        const hashPassword: string = await bcrypt.hash(data.user_password, 10)
        const sql: string = `INSERT INTO aurecon_users(user_nickname, user_email, user_password, role) VALUES ('${data.user_nickname}', '${data.user_email}', '${hashPassword}', '${1}')`;
        const result = await dbcon.query(sql);
        const newData = JSON.parse(JSON.stringify(result));
        return await this.findUser(newData.insertId);
    }

    public async findUser(id: number): Promise<IUser>{
        const sql: string = `SELECT * FROM aurecon_users WHERE id=${id}`;
        const result = await dbcon.query(sql);
        const user: IUser = JSON.parse(JSON.stringify(result));
        return user;
    }

    public async removeUser(id: number): Promise<IUser>{
        const sql: string = `DELETE FROM aurecon_users WHERE id=${id}`;
        const result = await dbcon.query(sql);
        const user: IUser = JSON.parse(JSON.stringify(result));
        return user;
    }
}

export default new UserRepo();