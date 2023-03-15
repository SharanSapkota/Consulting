const Pool = require('pg').Pool;

export const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "users",
    passowrd: "sharan",
    port: 5432
})