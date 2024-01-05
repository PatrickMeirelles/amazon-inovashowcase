const sequelize = require('../config/sequelize')
const Sequelize = require('sequelize')

const Product = require('./product')

const product = Product(sequelize, Sequelize.DataTypes)

const db = {
    product,
    sequelize
}

module.exports = db