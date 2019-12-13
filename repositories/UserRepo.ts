import dbcon from '../dbcon/aurecondb';
import bcrypt from 'bcryptjs';

import {IUser, ILoginData} from '../interface/IUser';

class UserRepo{

    public async userLogin(data: ILoginData): Promise<boolean>{
        const sql = `SELECT * FROM aurecon_users WHERE user_email = '${data.email}'`;
        const result: IUser = await dbcon.query(sql);
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
        const sql = `SELECT * FROM aurecon_users`;
        const result: IUser = await dbcon.query(sql);
        const user: IUser[] = JSON.parse(JSON.stringify(result));
        return user;
    }
}

export default new UserRepo();