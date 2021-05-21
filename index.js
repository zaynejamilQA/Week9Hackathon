const EXPRESS = require('express');
const MONGOOSE = require('mongoose');
const APP = EXPRESS();

const ROUTES = require('./routes/routes.js');

// Set up Mongoose

MONGOOSE.connect("mongodb://localhost/products", { 
    useNewUrlParser: true,
    useUnifiedTopology: true })
        .then(() => {
            const APP = EXPRESS();
            APP.use(EXPRESS.json());
            APP.use("/api", ROUTES);
            APP.listen(4999, () => {
                console.log("Server has started");
            })
        })

    