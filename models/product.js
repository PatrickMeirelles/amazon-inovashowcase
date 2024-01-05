const product = (sequelize, DataTypes) => {

    const Product = sequelize.define('Product', {
        name: {
            type: DataTypes.STRING
        },
        photo: {
            type: DataTypes.BLOB('long')
        },
        link: {
            type: DataTypes.INTEGER
        }  
    }, {
        tableName: 'product'
    })

    return Product

}

module.exports = product