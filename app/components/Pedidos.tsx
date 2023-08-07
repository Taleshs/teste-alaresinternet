/* eslint-disable react/jsx-key */
import TableHead from "@/app/components/pedidos/tableData/TableHead";
import TableData from "@/app/components/pedidos/tableData/TableData";

const Pedidos = () => {
  return (
    <section className="bg-gray-50p-3 sm:p-5">
      <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
        <div className="bg-whiterelative shadow-md sm:rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
            <h1>Lista de pedidos recentes</h1>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500">
              <TableHead />
              <TableData numero_de_itens={10} status="IN PROGRESS" />
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pedidos;