import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  nome: { type: String, required: true },
  quantidade: { type: Number, required: true },
  preco: { type: Number, required: true },
});

const productTable = mongoose.model('ProductTable', ProductSchema);
module.exports = productTable;