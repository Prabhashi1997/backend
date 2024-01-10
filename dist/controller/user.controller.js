"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../config/db");
const getAll = (req, res) => {
    db_1.connection.getConnection((err, conn) => {
        conn.query("select * from user", (err, resultSet) => {
            conn.release();
            if (err) {
                res.status(500).send({
                    message: 'INTERNAL SERVER ERROR',
                    result: null
                });
            }
            else {
                res.status(200).send({
                    message: 'OK',
                    result: resultSet
                });
            }
        });
    });
};
