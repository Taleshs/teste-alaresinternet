import axios from "axios";

const fetchPedidos = async (setDataCallback, numero_de_itens, status) => {
  try {
    const response = await axios.get("http://localhost:8000/api/pedidos");
    let pedidos = response.data;

    if (numero_de_itens && numero_de_itens > 0) {
      pedidos = pedidos.slice(0, numero_de_itens);
    }

    if (status) {
      pedidos = pedidos.filter((pedido) => pedido.status === status);
    }

    setDataCallback(pedidos);
  } catch (error) {
    console.error("Erro ao buscar Pedidos:", error);
  }
};

export default fetchPedidos;
