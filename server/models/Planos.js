// backend/models/Plano.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const planoSchema = new Schema({
  nome: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
  preco: {
    type: Number,
    required: true,
  },
  funcionalidades: [String], // Adicionando o campo funcionalidades
});

module.exports = mongoose.model('Planos', planoSchema);
