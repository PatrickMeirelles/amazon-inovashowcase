const express = require('express');
const { sequelize } = require('./models')

const app = express();

app.use(express.json())

const products = [];

//POST
app.post('/product/create', (req, res) => {
    const { name, photo, link } = req.body;

    products.push({
        name, 
        photo,
        link
    })

    console.log(products);
})


//GET

//PUT

//DELETE

sequelize.sync().then(() => {
    console.log('connected');
})

app.listen(4002, () => console.log("running server on port 4002"))

