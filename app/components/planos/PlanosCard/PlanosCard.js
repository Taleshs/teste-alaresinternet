import React from "react";
import FuncionalidadesList from "@/app/components/planos/PlanosCard/FuncionalidadesList";
import NomePlano from "@/app/components/planos/PlanosCard/NomePlano";
import DescricaoPlano from "@/app/components/planos/PlanosCard/DescricaoPlano";
import PrecoPlano from "@/app/components/planos/PlanosCard/PrecoPlano";
import BotaoCta from "@/app/components/planos/PlanosCard/BotaoCta";

const PlanosCard = ({ plano, onClick }) => {
  const handleVerDetalhes = () => {
    onClick(plano);
  };

  return (
    <div className="flex flex-col p-6 text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow xl:p-8">
      <NomePlano nome={plano.nome} />
      <DescricaoPlano descricao={plano.descricao} />
      <PrecoPlano preco={plano.preco} />
      <FuncionalidadesList funcionalidades={plano.funcionalidades} />
      <BotaoCta onClick={handleVerDetalhes} />
    </div>
  );
};

export default PlanosCard;
