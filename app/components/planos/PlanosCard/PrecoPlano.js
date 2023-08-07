import { formatCurrency } from "@/app/utils/utils";

const PrecoPlano = ({ preco }) => {
  return (
    <div className="flex justify-center items-baseline my-8">
      <span className="mr-2 text-5xl font-extrabold">
        {formatCurrency(preco)}
      </span>
    </div>
  );
};

export default PrecoPlano;
