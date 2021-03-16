const Pool = require("pg").Pool;

const pool = new Pool({
    user: "username",
    password: "password",
    host: "hostname",
    port: "port",
    database: "dbname"
});

module.exports = pool;
