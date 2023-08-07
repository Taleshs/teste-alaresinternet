import TableHead from "@/app/components/pedidos/tableData/TableHead";
import TableData from "@/app/components/pedidos/tableData/TableData";

export default function listaPedidos() {
  return (
    <>
      <table className="w-full text-sm text-left text-gray-500">
        <TableHead />
        <TableData numero_de_itens={10} status="IN PROGRESS" />
      </table>
    </>
  );
}
