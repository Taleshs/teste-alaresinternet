// backend/routes/planos.js
const express = require('express');
const router = express.Router();
const Plano = require('../models/Planos');

// Get All Planos
router.get('/', async (req, res) => {
  try {
    const planos = await Plano.find({});

    if (!planos) {
      throw new Error("An error occurred while fetching planos.");
    }

    res.status(200).json(planos);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching planos..." });
  }
});

// Get Plano by ID
router.get('/:id', async (req, res) => {
  try {
    const planoId = req.params.id;
    const plano = await Plano.findById(planoId);

    if (!plano) {
      throw new Error("An error occurred while fetching the plano.");
    }

    res.status(201).json(plano);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching the plano..." });
  }
});

// Create A Plano
router.post('/', async (req, res) => {
  try {
    const { nome, descricao, preco, funcionalidades } = req.body;

    const plano = await Plano.create({ nome, descricao, preco, funcionalidades });

    if (!plano) {
      throw new Error("An error occurred while creating a plano.");
    }

    res.status(201).json(plano);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while creating a plano..." });
  }
});

// Update A Plano
router.put('/:id', async (req, res) => {
  try {
    const planoId = req.params.id;
    const { nome, descricao, preco, funcionalidades } = req.body;

    const plano = await Plano.findByIdAndUpdate(planoId, { nome, descricao, preco, funcionalidades });

    if (!plano) {
      throw new Error("An error occurred while updating a plano.");
    }

    res.status(201).json(plano);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while updating a plano..." });
  }
});

// Delete A Plano by ID
router.delete('/:id', async (req, res) => {
  try {
    const planoId = req.params.id;
    const plano = await Plano.findByIdAndDelete(planoId);

    if (!plano) {
      throw new Error("An error occurred while deleting a plano.");
    }

    res.status(201).json(plano);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while deleting a plano..." });
  }
});

module.exports = router;
