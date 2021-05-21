const EXPRESS = require('express');
const PRODUCT = require('./products');
const ROUTER = EXPRESS.Router();

// Get all products
ROUTER.get('/products', async (req, res) => {
    const PROD = await PRODUCT.find();
    res.send(PROD);
})

// Create carrot

ROUTER.post('/createCarrot', async (req, res) => {
    const PROD = new PRODUCT({
        name: "carrots",
        price: 1.23
    })
    await PROD.save();
    res.send(PROD);
})

// Get by ID
ROUTER.get("/getById/:id", async (req, res) => {
    try {
        const PROD = await PRODUCT.findById(req.params.id).exec();
        res.send(PROD);
        // console.log(PROD);
    } catch {
        res.status(500).send("invalid");
    }
})


//update
ROUTER.put('/update/:id', (req, res) => {
    const id = req.params.id;
    console.log('id: ', id);
    const name = req.body.name;
    const price = req.body.price;
    const updatedProduct = new PRODUCT({ name, price });

    updatedProduct
        .save()
        .then(() => res.json(`Product ${id} updated.`))
        .catch(err => res.status(400).json("Error: " + err));
})

// //delete

ROUTER.delete("/delById/:id", async (req, res) => {
    try {
        const PROD = await PRODUCT.findByIdAndDelete(req.params.id).exec();
        res.send(PROD);
        console.log("Item deleted");
    } catch {
        res.status(500).send("invalid");
    }
})
// }

module.exports = ROUTER;