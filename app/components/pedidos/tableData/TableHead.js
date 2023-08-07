const TableHead = () => {
  return (
    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
      <tr>
        <th scope="col" className="px-4 py-3">
          Nome
        </th>
        <th scope="col" className="px-4 py-3">
          E-mail
        </th>
        <th scope="col" className="px-4 py-3">
          Telefone
        </th>
        <th scope="col" className="px-4 py-3">
          Status Pedido
        </th>
        <th scope="col" className="px-4 py-3">
          Ações
        </th>
      </tr>
    </thead>
  );
};

export default TableHead;
