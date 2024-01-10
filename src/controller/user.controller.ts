import { Request, Response } from 'express';
import { User } from '../model/user';
import { connection } from '../config/db';
import { QueryError, PoolConnection } from 'mysql2';
const getAll = (req: Request, res: Response) => {
    connection.getConnection((err: QueryError, conn: PoolConnection) => {
        conn.query("select * from user", (err, resultSet: User[]) => {
            conn.release();
            if (err) {
                res.status(500).send({
                    message: 'INTERNAL SERVER ERROR',
                    result: null
                });
            } else {
                res.status(200).send({
                    message: 'OK',
                    result: resultSet
                });
            }
        })
    });
}