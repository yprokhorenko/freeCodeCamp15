import React from 'react'
import { HiX } from "react-icons/hi";

const Modal = () => {
  return (
    <div className={'modal-overlay show-modal'}>
        <div className="modal">
            <h3 className="modal-content">Modal Content</h3>
            <button className="modal-close-btn">
                <HiX/>
            </button>
        </div>
    </div>
  )
}

export default Modal