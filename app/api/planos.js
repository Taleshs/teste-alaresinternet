import axios from "axios";

const fetchPlanos = async (setDataCallback) => {
  try {
    const response = await axios.get("http://localhost:8000/api/planos");
    setDataCallback(response.data);
  } catch (error) {
    console.error("Erro ao buscar planos:", error);
  }
};

export default fetchPlanos;
