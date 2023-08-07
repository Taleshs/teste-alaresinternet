import React, { useState } from "react";
import Modal from "./Modal";

const EditButton = ({ pedido, onPedidoUpdated }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleEditPedido = () => {
    setModalIsOpen(true);
  };

  return (
    <>
      <button
        onClick={handleEditPedido}
        type="button"
        className="text-blue-600 hover:text-blue-800 focus:outline-none"
      >
        Edit
      </button>

      {modalIsOpen && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          pedido={pedido}
          onPedidoUpdated={onPedidoUpdated}
        />
      )}
    </>
  );
};

export default EditButton;
