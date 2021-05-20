const EXPRESS = require('express');
const PRODUCT = require('./products');
const ROUTER = EXPRESS.Router();

// Get all products
ROUTER.get('/products', async(req, res) => {
    const PROD = await PRODUCT.find();
    res.send(PROD);
})

// Create products

ROUTER.post('/products', async(req, res) => {
    const PROD = new PRODUCT({
        name: "carrots",
        price: 1.23
    })
    await PROD.save();
    res.send(PROD);
})

module.exports = ROUTER;