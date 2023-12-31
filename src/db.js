import { createPool } from 'mysql2/promise';
import { DB_HOST, DB_PORT, DB_DATABASE, DB_USER, DB_PASSWORD } from './config.js'

//createPool te permite mantener un conjunto de conexiones que se pueden reutilizar y utilizar tambien en produccion
export const pool = createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_DATABASE

})

