require('dotenv').config()
const { Pool } = require('pg')

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_SENHA,
    port: process.env.DB_PORT
})

module.exports = pool  //pode excluir esse arquivo