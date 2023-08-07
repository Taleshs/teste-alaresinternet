import TableHead from "@/app/components/planos/tableData/tableHead";
import TableData from "@/app/components/planos/tableData/tableData";

const PlanoList = () => {
  return (
    <section class="bg-white">
      <div class="py-8 px-4 mx-auto max-w-2xl ">
        <h2 class="mb-4 text-xl font-bold text-gray-900">Editar Planos</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500">
          <TableHead />
          <TableData />
        </table>
      </div>
    </section>
  );
};

export default PlanoList;
