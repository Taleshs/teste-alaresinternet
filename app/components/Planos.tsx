"use client";
import { useState, useEffect } from "react";
import fetchPlanos from "@/app/api/planos";
import PlanosCard from "@/app/components/planos/PlanosCard/PlanosCard";
import Modal from "@/app/components/planos/PlanosCard/Modal";

const Planos = ({}) => {
  const [planos, setPlanos] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [planoSelecionado, setPlanoSelecionado] = useState(null);

  useEffect(() => {
    fetchPlanos(setPlanos);
  }, []);

  const handleVerDetalhes = (plano) => {
    setPlanoSelecionado(plano);
    setModalIsOpen(true);
  };

  return (
    <>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
            Nossas Ofertas
          </h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl">
            A <strong>Alares</strong> está presente em mais de 100 cidades do
            Brasil.
          </p>
        </div>

        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {planos.map((plano) => (
            <PlanosCard
              key={plano._id}
              plano={plano}
              onClick={handleVerDetalhes}
            />
          ))}
        </div>
      </div>

      {planoSelecionado && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          planoId={planoSelecionado._id}
          title={planoSelecionado.nome}
        />
      )}
    </>
  );
};

export default Planos;
