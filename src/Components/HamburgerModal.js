import React from "react";
import ReactDom from "react-dom";
import closebutton from "../Assets/universal/closesign.svg";

const HamburgerModal = ({ setHamburgerModal, setIsActive }) => {
  return (
    <>
      {ReactDom.createPortal(
        <div className="modal--hamburger--overlay">
          <div className="modal--hamburger--container">
            <p className="modal--hamburger--text black fs16 fw700 m0 mt24">
              Home
            </p>

            <div className="modal--hamburger--text black fs16 fw700 m0 mt24">
              Overview
            </div>

            <p className="modal--hamburger--text black fs16 fw700 m0 mt24">
              Submission
            </p>

            <p className="modal--hamburger--text black fs16 fw700 m0 mt24">
              Response
            </p>

            <img
              src={closebutton}
              className="modal--cross--button"
              onClick={() => {
                setHamburgerModal(false);
                setIsActive(false);
              }}
            />
          </div>
        </div>,
        document.querySelector("#modal-root")
      )}
    </>
  );
};

export default HamburgerModal;
