import React from "react";

const Modal = ({ modalContent, modalState, closeModal }) => {
  return (
    <section className={`modal-section ${modalState ? "show-modal" : ""}`}>
      <div className="modal-content item bg-white w-50 m-0">
        <h4>{modalContent || "Sono un Modal"}</h4>
        <button className="btn btn-danger" onClick={closeModal}>
          Chiudi modale
        </button>
      </div>
    </section>
  );
};

export default Modal;
