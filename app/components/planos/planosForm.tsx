"use client";
import React, { useState } from "react";
import axios from "axios";

const planosForm = () => {
  const initialState = {
    nome: "",
    descricao: "",
    preco: "",
    funcionalidades: [],
  };

  const [planoData, setPlanoData] = useState(initialState);
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPlanoData({ ...planoData, [name]: value });
  };

  const handleFuncionalidadeChange = (index, e) => {
    const funcionalidades = [...planoData.funcionalidades];
    funcionalidades[index] = e.target.value;
    setPlanoData({ ...planoData, funcionalidades });
  };

  const addFuncionalidade = () => {
    const funcionalidades = [...planoData.funcionalidades, ""];
    setPlanoData({ ...planoData, funcionalidades });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { nome, descricao, preco, funcionalidades } = planoData;
      const data = {
        nome,
        descricao,
        preco: parseFloat(preco),
        funcionalidades,
      };
      await axios.post("http://localhost:8000/api/planos", data);
      // Lógica para mostrar mensagem de sucesso ou redirecionar para a página de listagem de planos
      console.log("Plano adicionado com sucesso!");
      setSuccessMessage("Plano adicionado com sucesso!");
      setPlanoData(initialState);
    } catch (error) {
      console.error("Erro ao adicionar plano:", error);
    }
  };

  return (
    <>
      <section class="bg-white">
        <div class="py-8 px-4 mx-auto max-w-2xl ">
          <h2 class="mb-4 text-xl font-bold text-gray-900">
            Adicionar Novo Plano
          </h2>
          {successMessage && (
            <div
              class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50"
              role="alert"
            >
              <span class="font-medium">{successMessage}</span>
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div class="sm:col-span-2">
                <label
                  for="nome"
                  class="block mb-2 text-sm font-medium text-gray-900"
                >
                  Nome do Plano
                </label>
                <input
                  type="text"
                  name="nome"
                  id="nome"
                  value={planoData.nome}
                  onChange={handleInputChange}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Digite o nome do plano"
                  required
                ></input>
              </div>
              <div class="sm:col-span-2">
                <label
                  for="descricao"
                  class="block mb-2 text-sm font-medium text-gray-900"
                >
                  Descrição
                </label>
                <textarea
                  id="descricao"
                  name="descricao"
                  value={planoData.descricao}
                  onChange={handleInputChange}
                  rows="4"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Digite a descrição do plano"
                  required
                ></textarea>
              </div>
              <div class="w-full">
                <label
                  for="preco"
                  class="block mb-2 text-sm font-medium text-gray-900"
                >
                  Preço
                </label>
                <input
                  type="number"
                  name="preco"
                  id="preco"
                  value={planoData.preco}
                  onChange={handleInputChange}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Informe o valor do plano"
                  required
                ></input>
              </div>
              <div>
                <label
                  for="funcionalidades"
                  class="block mb-2 text-sm font-medium text-gray-900"
                >
                  Funcionalidades
                </label>
                {planoData.funcionalidades.map((funcionalidade, index) => (
                  <input
                    key={index}
                    type="text"
                    name="funcionalidades"
                    value={funcionalidade}
                    onChange={(e) => handleFuncionalidadeChange(index, e)}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Digite uma funcionalidade"
                    required
                  />
                ))}
                <button
                  type="button"
                  onClick={addFuncionalidade}
                  class="inline-flex items-center px-3 py-1 mt-2 text-sm font-medium text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 hover:bg-primary-800"
                >
                  Adicionar Funcionalidade
                </button>
              </div>
            </div>
            <button
              type="submit"
              class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 "
            >
              Adicionar Plano
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default planosForm;
