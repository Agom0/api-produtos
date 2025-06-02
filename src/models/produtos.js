const pool = require("./database")

async function getProdutos() {
    const produtos = await pool.require('SELECT * FROM produtos')

    return produtos.rows
}

module.exports = {
    getProdutos
}