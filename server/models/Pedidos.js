// backend/models/Pedido.js
const mongoose = require("mongoose");

const pedidoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  telefone: {
    type: String,
    required: true,
  },
  plano: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Plano",
    required: true,
  },
  dataPedido: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ["IN PROGRESS", "DONE", "ARCHIVE"],
    default: "IN PROGRESS",
  },
});

module.exports = mongoose.model("Pedido", pedidoSchema);
