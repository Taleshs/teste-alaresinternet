// backend/routes/pedidos.js
const express = require("express");
const router = express.Router();
const Pedido = require("../models/Pedidos");
const Plano = require("../models/Planos");

// Get All Pedidos
router.get("/", async (req, res) => {
  try {
    const pedidos = await Pedido.find().sort({ dataPedido: -1 });

    if (!pedidos) {
      throw new Error("An error occurred while fetching pedidos.");
    }

    res.status(200).json(pedidos);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching pedidos..." });
  }
});

// Get Pedido by ID
router.get("/:id", async (req, res) => {
  try {
    const pedidoId = req.params.id;
    const pedido = await Pedido.findById(pedidoId);

    if (!pedido) {
      throw new Error("An error occurred while fetching the pedido.");
    }

    res.status(201).json(pedido);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching the pedido..." });
  }
});

// Create A Pedido
router.post("/", async (req, res) => {
  try {
    const { nome, email, telefone, planoId } = req.body;

    const plano = await Plano.findById(planoId);
    if (!plano) {
      return res.status(404).json({ error: "Plano not found." });
    }

    const pedido = await Pedido.create({
      nome,
      email,
      telefone,
      plano: plano._id,
    });

    if (!pedido) {
      throw new Error("An error occurred while creating a pedido.");
    }

    res.status(201).json(pedido);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while creating a pedido..." });
  }
});

// Update Pedido
router.put("/:id", async (req, res) => {
  try {
    const pedidoId = req.params.id;
    const updateFields = req.body;

    const pedido = await Pedido.findById(pedidoId);

    if (!pedido) {
      return res.status(404).json({ error: "Pedido not found." });
    }

    // Criar objeto de atualização apenas com os campos alterados
    const updatedFields = {};
    Object.keys(updateFields).forEach((field) => {
      if (pedido[field] !== updateFields[field]) {
        updatedFields[field] = updateFields[field];
      }
    });

    // Realizar a atualização se houver campos alterados
    if (Object.keys(updatedFields).length > 0) {
      const updatedPedido = await Pedido.findByIdAndUpdate(
        pedidoId,
        updatedFields,
        { new: true }
      );

      res.json(updatedPedido);
    } else {
      // Se nenhum campo foi alterado, retornar o pedido original
      res.json(pedido);
    }
  } catch (error) {
    res.status(500).json({
      error: "An error occurred while updating the pedido.",
    });
  }
});

// Delete A Pedido by ID
router.delete("/:id", async (req, res) => {
  try {
    const pedidoId = req.params.id;
    const pedido = await Pedido.findByIdAndDelete(pedidoId);

    if (!pedido) {
      throw new Error("An error occurred while deleting a pedido.");
    }

    res.status(201).json(pedido);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while deleting a pedido..." });
  }
});

module.exports = router;
