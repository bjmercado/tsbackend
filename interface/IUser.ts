export interface IUser{
    id: number;
    user_nickname: string;
    user_email: string;
    user_password: string;
    role: number;
}

export interface ILoginData{
    email: string;
    password: string;
}
