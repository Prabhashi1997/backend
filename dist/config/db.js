"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const mysql2_1 = require("mysql2");
exports.connection = (0, mysql2_1.createPool)({
    // prefer to use .env for environment variables to hide passwords
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '1234',
    database: 'project1_db'
});
