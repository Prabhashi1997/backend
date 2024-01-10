import { createPool } from 'mysql2';
export const connection = createPool({
    // prefer to use .env for environment variables to hide passwords
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '1234',
    database: 'project1_db'
});