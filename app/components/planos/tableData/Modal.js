import React, { useState } from "react";
import axios from "axios";
import ReactModal from "react-modal";

const Modal = ({ isOpen, onRequestClose, planoData, onPlanoUpdated }) => {
  const [plano, setPlano] = useState(planoData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPlano({ ...plano, [name]: value });
  };

  const handleFuncionalidadeChange = (index, e) => {
    const newFuncionalidades = [...plano.funcionalidades];
    newFuncionalidades[index] = e.target.value;
    setPlano({ ...plano, funcionalidades: newFuncionalidades });
  };

  const addFuncionalidade = () => {
    setPlano({ ...plano, funcionalidades: [...plano.funcionalidades, ""] });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `http://localhost:8000/api/planos/${planoData._id}`,
        plano
      );

      onPlanoUpdated();
      onRequestClose();
    } catch (error) {
      console.error("Erro ao atualizar o plano:", error);
    }
  };

  const handleDeletePlano = async () => {
    try {
      await axios.delete(`http://localhost:8000/api/planos/${planoData._id}`);
      onPlanoUpdated();
      onRequestClose();
    } catch (error) {
      console.error("Erro ao excluir o plano:", error);
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
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <div className="sm:col-span-2">
            <label
              htmlFor="nome"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Nome do Plano
            </label>
            <input
              type="text"
              name="nome"
              id="nome"
              value={plano.nome}
              onChange={handleInputChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="Digite o nome do plano"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="descricao"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Descrição
            </label>
            <textarea
              id="descricao"
              name="descricao"
              value={plano.descricao}
              onChange={handleInputChange}
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Digite a descrição do plano"
              required
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="preco"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Preço
            </label>
            <input
              type="number"
              name="preco"
              id="preco"
              value={plano.preco}
              onChange={handleInputChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="Informe o valor do plano"
              required
            />
          </div>
          <div>
            <label
              htmlFor="funcionalidades"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Funcionalidades
            </label>
            {plano.funcionalidades.map((funcionalidade, index) => (
              <input
                key={index}
                type="text"
                name="funcionalidades"
                value={funcionalidade}
                onChange={(e) => handleFuncionalidadeChange(index, e)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Digite uma funcionalidade"
                required
              />
            ))}
            <button
              type="button"
              onClick={addFuncionalidade}
              className="inline-flex items-center px-3 py-1 mt-2 text-sm font-medium text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 hover:bg-primary-800"
            >
              Adicionar Funcionalidade
            </button>
          </div>
        </div>
        <button
          type="submit"
          onClick={handleFormSubmit}
          className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-200 hover:bg-primary-800 rounded-lg px-4 py-2 mt-4 float-right"
        >
          Atualizar Plano
        </button>
        <button
          type="button"
          onClick={handleDeletePlano}
          className="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-4 mr-4"
        >
          Excluir Plano
        </button>
      </form>
    </ReactModal>
  );
};

export default Modal;
