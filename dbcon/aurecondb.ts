import mysql from 'mysql';

class AureconDB{
    public con: mysql.Pool;

    constructor(){
        this.con = mysql.createPool({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'aurecon_project'
        });

        this.con.getConnection((e: Error) => {
            if (e) throw e;
            console.log('database connected');
        });
    }

    public query(sql: string): Promise<any>{
        return new Promise((resolve, reject) => {
            this.con.query(sql, (err, rows) => {
                if (err) return reject(err);
                resolve(rows);
            })
        });
    }

    public close() {
        return new Promise( ( resolve, reject ) => {
            this.con.end( err => {
                if (err) return reject(err);
                resolve();
            } );
        } );
    }
}

export default new AureconDB();