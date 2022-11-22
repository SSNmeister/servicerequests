import React from "react";
import ReactDom from "react-dom";
import whitecross from "../Assets/universal/whitecross.svg";

const ConfirmationModal = ({ handleSubmit, setConfirmationModal }) => {
  return (
    <>
      {ReactDom.createPortal(
        <div className="modal--confirmation--overlay">
          <div className="confirmation--modal--container">
            <div className="confirmation--modal--box">
              <p className="confirmation--modal--box--text">
                Confirm submission?
              </p>
              <button
                className="submit--confirmation--button"
                onClick={() => handleSubmit()}
              >
                Submit
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
    </>
  );
};

export default ConfirmationModal;
