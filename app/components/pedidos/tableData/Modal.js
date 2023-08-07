import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactModal from "react-modal";

const Modal = ({ isOpen, onRequestClose, pedido, onPedidoUpdated }) => {
  const [formData, setFormData] = useState(pedido);
  const [planoSelecionado, setPlanoSelecionado] = useState(null);
  const [statusOptions, setStatusOptions] = useState([]);

  useEffect(() => {
    const fetchPlano = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/planos/${formData.plano}`
        );

        setPlanoSelecionado(response.data.nome);
      } catch (error) {
        console.error("Erro ao buscar o nome do plano:", error);
      }
    };

    const statusOptions = ["IN PROGRESS", "DONE"];

    setStatusOptions(statusOptions);

    if (formData.plano) {
      fetchPlano();
    }
  }, [formData.plano]);

  const getStatusName = (statusValue) => {
    const statusMap = {
      "IN PROGRESS": "Em andamento",
      DONE: "Concluído",
      ARCHIVE: "Arquivado",
    };

    return statusMap[statusValue] || statusValue;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const updatedFields = {};
    let isUpdated = false;

    for (const field in formData) {
      if (formData[field] !== pedido[field]) {
        updatedFields[field] = formData[field];
        isUpdated = true;
      }
    }

    if (!isUpdated) {
      onRequestClose();
      return;
    }

    const updatedPedidoData = {
      ...updatedFields,
    };

    try {
      await axios.put(
        `http://localhost:8000/api/pedidos/${pedido._id}`,
        updatedPedidoData
      );

      onPedidoUpdated();

      onRequestClose();
    } catch (error) {
      console.error("Erro ao atualizar pedido:", error);
    }
  };

  const handleArquivar = async () => {
    try {
      await axios.put(`http://localhost:8000/api/pedidos/${pedido._id}`, {
        status: "ARCHIVE",
      });

      onPedidoUpdated();
      onRequestClose();
    } catch (error) {
      console.error("Erro ao arquivar pedido:", error);
    }
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="modal-overlay"
      className="relative p-4 bg-white rounded-lg shadowsm:p-5"
    >
      <form onSubmit={handleFormSubmit}>
        <div className="grid gap-4 mb-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="nome"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Nome
            </label>
            <input
              type="text"
              name="nome"
              id="nome"
              value={formData.nome}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="Nome"
            ></input>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              E-mail
            </label>
            <input
              type="text"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="E-mail"
            ></input>
          </div>
          <div>
            <label
              htmlFor="telefone"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Telefone
            </label>
            <input
              type="text"
              name="telefone"
              id="telefone"
              value={formData.telefone}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="Telefone"
            ></input>
          </div>
          <div>
            <label
              htmlFor="status"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Status
            </label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
            >
              {statusOptions.map((status) => (
                <option key={status} value={status}>
                  {getStatusName(status)}
                </option>
              ))}
            </select>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="plano"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Plano Selecionado
            </label>

            <input
              type="text"
              name="plano"
              value={planoSelecionado || ""}
              disabled
              readonly
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed"
              placeholder="Plano Selecionado"
            ></input>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button
            type="submit"
            className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          >
            Atualizar Pedido
          </button>
          <button
            type="button"
            onClick={handleArquivar}
            className="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          >
            <svg
              className="mr-1 -ml-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            Arquivar
          </button>
        </div>
        <hr className="h-px my-8 bg-gray-200 border-0"></hr>
        <p className="text-xs text-gray-400 text-right">
          ID do Pedido: {pedido._id}
        </p>
      </form>
    </ReactModal>
  );
};

export default Modal;
