import React, { useContext } from "react";
import { HiX } from "react-icons/hi";
import { AppContext } from "../context";

const Modal = () => {
  const { isModalOpen, closeModal } = useContext(AppContext);
  return (
    <div className={`${isModalOpen ? "modal-overlay show-modal" : "modal-overlay"}`}>
      <div className="modal">
        <h3 className="modal-content">Modal Content</h3>
        <button onClick={closeModal} className="modal-close-btn">
          <HiX />
        </button>
      </div>
    </div>
  );
};

export default Modal;
