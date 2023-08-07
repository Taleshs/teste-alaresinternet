// backend/index.js
require("dotenv").config({ path: "./.env" });

const cors = require("cors");
const express = require("express");
const connectDB = require("./connectDB");

const app = express();
const PORT = process.env.PORT || 8000;

connectDB();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Importando as rotas das tarefas
const pedidosRouter = require("./routes/pedidos");
const planosRouter = require("./routes/planos");

app.use("/api/pedidos", pedidosRouter);
app.use("/api/planos", planosRouter);

app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
});
