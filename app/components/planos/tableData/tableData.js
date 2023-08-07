"use client";
import React, { useState, useEffect } from "react";
import fetchPlanos from "@/app/api/planos";
import EditButton from "@/app/components/planos/tableData/EditButton";
import { formatCurrency } from "@/app/utils/utils";

const TableData = () => {
  const [planos, setPlanos] = useState([]);

  useEffect(() => {
    fetchPlanos(setPlanos);
  }, []);

  const handlePlanoUpdated = () => {
    fetchPlanos(setPlanos);
  };

  return (
    <tbody>
      {planos.map((plano) => (
        <tr key={plano.id} className="border-b">
          <th
            scope="row"
            className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap"
          >
            {plano.nome}
          </th>
          <td className="px-4 py-3">{formatCurrency(plano.preco)}</td>

          <td className="px-4 py-3 flex items-center justify-end">
            <EditButton plano={plano} onPlanoUpdated={handlePlanoUpdated} />
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableData;
