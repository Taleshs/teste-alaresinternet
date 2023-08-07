import React, { useState } from "react";
import Modal from "./Modal";

const EditButton = ({ plano, onPlanoUpdated }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleEditPlano = () => {
    setModalIsOpen(true);
  };

  return (
    <>
      <button
        onClick={handleEditPlano}
        type="button"
        className="text-blue-600 hover:text-blue-800 focus:outline-none"
      >
        Edit
      </button>

      {modalIsOpen && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          planoData={plano}
          onPlanoUpdated={onPlanoUpdated}
        />
      )}
    </>
  );
};

export default EditButton;
