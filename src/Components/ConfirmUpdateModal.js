import React from "react";
import ReactDom from "react-dom";
import whitecross from "../Assets/universal/whitecross.svg";

const ConfirmUpdateModal = ({ handleUpdate, setConfirmationModal }) => {
  return (
    <div>
      {ReactDom.createPortal(
        <div className="modal--confirmation--overlay">
          <div className="confirmation--modal--container">
            <div className="confirmation--modal--box">
              <span className="confirmation--modal--box--text">
                Confirm update?
              </span>
              <span className="confirmation--modal--box--text mb8 ">
                Cannot be reverted!
              </span>
              <button
                className="submit--confirmation--button"
                onClick={() => handleUpdate()}
              >
                Update
              </button>
            </div>
            <img
              src={whitecross}
              alt="images"
              className="confirmation--close--button"
              onClick={() => {
                setConfirmationModal(false);
              }}
            />
          </div>
        </div>,
        document.querySelector("#modal-root")
      )}
    </div>
  );
};

export default ConfirmUpdateModal;
