const TableHead = () => {
  return (
    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
      <tr>
        <th scope="col" className="px-4 py-3">
          Nome Plano
        </th>
        <th scope="col" className="px-4 py-3">
          Valor
        </th>
        <th scope="col" className="px-4 py-3">
          Ações
        </th>
      </tr>
    </thead>
  );
};

export default TableHead;
