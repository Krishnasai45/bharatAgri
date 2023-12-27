import React from "react";
import { FiX } from "react-icons/fi";
import "../Styles/Modal.css";

export const Modal = ({  closeModal, children }) => {
    return (
        <div
            className="modal-container"
            onClick={(e) => {
                if (e.target.className === "modal-container")
                    closeModal(false);
            }}
        >
            <div className="modal">
                <div className="modal-header">
                    <h4>Crop Product</h4>
                    <div onClick={closeModal} className="close"><FiX /></div>
                </div>
                <div className="modal-content">{children}</div>
            </div>
        </div>
    );
};