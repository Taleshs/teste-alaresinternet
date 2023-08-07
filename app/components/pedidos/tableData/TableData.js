"use client";
import React, { useState, useEffect } from "react";
import fetchPedidos from "@/app/api/pedidos";
import EditButton from "@/app/components/pedidos/tableData/EditButton";

const TableData = ({ numero_de_itens, status }) => {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    fetchPedidos(setPedidos, numero_de_itens, status);
  }, [numero_de_itens, status]);

  const handlePedidoUpdated = () => {
    fetchPedidos(setPedidos, numero_de_itens, status);
  };

  return (
    <tbody>
      {pedidos.map((pedido) => (
        <tr key={pedido.id} className="border-b">
          <th
            scope="row"
            className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap"
          >
            {pedido.nome}
          </th>
          <td className="px-4 py-3">{pedido.email}</td>
          <td className="px-4 py-3">{pedido.telefone}</td>
          <td className="px-4 py-3">
            {pedido.status === "IN PROGRESS" ? (
              <span className="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded border border-yellow-300">
                Em Andamento
              </span>
            ) : pedido.status === "DONE" ? (
              <span className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded border border-red-400">
                Concluído
              </span>
            ) : (
              <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded border border-gray-400">
                Arquivado
              </span>
            )}
          </td>
          <td className="px-4 py-3 flex items-center justify-end">
            <EditButton pedido={pedido} onPedidoUpdated={handlePedidoUpdated} />
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableData;
