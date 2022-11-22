import React from "react";
import ReactDom from "react-dom";
import closebutton from "../Assets/universal/closesign.svg";
import { useNavigate } from "react-router-dom";

const HamburgerModal = ({ setHamburgerModal, setIsActive }) => {
  const navigate = useNavigate();

  return (
    <>
      {ReactDom.createPortal(
        <div className="modal--hamburger--overlay">
          <div className="modal--hamburger--container">
            <p
              className="modal--hamburger--text black fs16 fw700 m0 mt24"
              onClick={() => {
                navigate("/");
                setHamburgerModal(false);
                setIsActive(false);
              }}
            >
              Home
            </p>

            <div
              className="modal--hamburger--text black fs16 fw700 m0 mt24"
              onClick={() => {
                navigate("/overview");
                setHamburgerModal(false);
                setIsActive(false);
              }}
            >
              Overview
            </div>

            <p
              className="modal--hamburger--text black fs16 fw700 m0 mt24"
              onClick={() => {
                navigate("/submission");
                setHamburgerModal(false);
                setIsActive(false);
              }}
            >
              Submission
            </p>

            <p
              className="modal--hamburger--text black fs16 fw700 m0 mt24"
              onClick={() => {
                navigate("/response");
                setHamburgerModal(false);
                setIsActive(false);
              }}
            >
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
