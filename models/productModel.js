const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
  
    brand: {
      type: String,
      required: true,
    },
  
    category: {
      type: String,
      required: true,
    },
  }, { timestamps: true });
  
const productModel = mongoose.model('products', productSchema);
  
module.exports = productModel;