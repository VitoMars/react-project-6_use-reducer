import React, { useReducer } from "react";
import Modal from "./Modal";
import reducer from "./Reducer";
import { OPEN_MODAL, CLOSE_MODAL } from "./actions";

const initialState = {
  isModalOpen: false,
  modalContent: "Sono una modale",
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openModal = () =>
    dispatch({
      type: OPEN_MODAL,
    });

  const closeModal = () => {
    dispatch({
      type: CLOSE_MODAL,
    });
  };

  return (
    <React.Fragment>
      <div className="d-flex justify-content-center mt-5">
        <button className="btn btn-primary" onClick={openModal}>
          Mostra Modale
        </button>
      </div>
      <Modal
        modalContent={state.modalContent}
        modalState={state.isModalOpen}
        closeModal={closeModal}
      />
    </React.Fragment>
  );
};

export default UseReducer;
