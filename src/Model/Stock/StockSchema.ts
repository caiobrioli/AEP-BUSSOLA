import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProductStock = new Schema({
  nome: { type: String, required: true },
  quantidade: { type: Number, required: true },
  preco: { type: Number, required: true },
  stockValue:{type: Number, required: true}
});

const productStock = mongoose.model('ProductStock', ProductStock);
module.exports = productStock;