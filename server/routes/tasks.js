// backend/routes/tasks.js
const express = require('express');
const router = express.Router();
const Tasks = require('../models/Tasks');

// Get All Tasks
router.get('/', async (req, res) => {
  try {
    const data = await Tasks.find({});

    if (!data) {
      throw new Error("An error occurred while fetching tasks.");
    }

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching tasks..." });
  }
});

// Get Task by ID
router.get('/:id', async (req, res) => {
  try {
    const taskId = req.params.id;
    const data = await Tasks.findById(taskId);

    if (!data) {
      throw new Error("An error occurred while fetching the task.");
    }

    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching the task..." });
  }
});

// Create A Task
router.post('/', async (req, res) => {
  try {
    const { title, description } = req.body;

    const data = await Tasks.create({ title, description });

    if (!data) {
      throw new Error("An error occurred while creating a task.");
    }

    res.status(201).json(data);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while creating a task..." });
  }
});

// Update A Task
router.put('/:id', async (req, res) => {
  try {
    const taskId = req.params.id;
    const { title, description } = req.body;

    const data = await Tasks.findByIdAndUpdate(taskId, { title, description });

    if (!data) {
      throw new Error("An error occurred while updating a task.");
    }

    res.status(201).json(data);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while updating a task..." });
  }
});

// Delete A Task by ID
router.delete('/:id', async (req, res) => {
  try {
    const taskId = req.params.id;
    const data = await Tasks.findByIdAndDelete(taskId);

    if (!data) {
      throw new Error("An error occurred while deleting a task.");
    }

    res.status(201).json(data);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while deleting a task..." });
  }
});

module.exports = router;
