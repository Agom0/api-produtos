const { sequelize, DataTypes } = require('sequelize')
const { sequelize } = require('../config/database')

const Produtos = sequelize.define('produtos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNULL: false
    },
    preco: {
        type: DataTypes.FLOAT,
        allowNULL: false
    },
    categoria: {
        type: DataTypes.STRING,
        allowNULL: false
    },
    image_url: {
        type: DataTypes.TEXT
    }
})

module.exports = Produtos