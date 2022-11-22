import React from "react";
import ReactDom from "react-dom";
import { useNavigate } from "react-router-dom";
import whitecross from "../Assets/universal/whitecross.svg";

const ConfirmationModalWorker = ({
  createService,
  setConfirmationModalWorker,
}) => {
  return (
    <>
      {ReactDom.createPortal(
        <div className="modal--confirmation--overlay">
          <div className="confirmation--modal--container">
            <div
              className="confirmation--modal--box"
              onClick={() => {
                createService();
              }}
            >
              <p className="confirmation--modal--box--text">
                Confirm submission?
              </p>
              <button className="submit--confirmation--button">Submit</button>
            </div>
            <img
              src={whitecross}
              alt="images"
              className="confirmation--close--button"
              onClick={() => {
                setConfirmationModalWorker(false);
              }}
            />
          </div>
        </div>,
        document.querySelector("#modal-root")
      )}
    </>
  );
};

export default ConfirmationModalWorker;
