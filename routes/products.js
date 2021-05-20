const MONGOOSE = require('mongoose');
const SCHEMA = MONGOOSE.Schema;

const productSchema = new SCHEMA({
    name: String,
    price: String
})

module.exports = MONGOOSE.model("Products", productSchema);

