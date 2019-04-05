import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

let connectionString;

if (process.env.NODE_ENV === 'test') {
    connectionString = process.env.TEST;
} else {
    connectionString = process.env.DATABASE_URL;
}
const pool = new Pool({
    connectionString
});

export default {
    /**
   * DB Query
   * @param {object} req
   * @param {object} res
   * @returns {object} object 
   */
    query(text, params){
        return new Promise((resolve, reject) => {
            pool.query(text, params)
                .then((res) => {
                    resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }
};