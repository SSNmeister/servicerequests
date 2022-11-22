import React from "react";
import ReactDom from "react-dom";
import closebutton from "../Assets/universal/closesign.svg";

const ConfirmationModal = () => {
  return (
    <>
      {ReactDom.createPortal(
        <div className="modal--confirmation--overlay">
          <div className="confirmation--modal--container">
            <div className="confirmation--modal--box"></div>
          </div>
        </div>,
        document.querySelector("#modal-root")
      )}
    </>
  );
};

export default ConfirmationModal;
