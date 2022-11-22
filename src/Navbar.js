import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import backButton from "./Assets/universal/backbutton.svg";
import HamburgerModal from "./Components/HamburgerModal";

const Navbar = () => {
  //===============================STATES=======================================
  //============================NavBar states===================================
  const [isActive, setIsActive] = useState(false); //hamburger animation states
  const [hamburgerModal, setHamburgerModal] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      {hamburgerModal && (
        <HamburgerModal
          setHamburgerModal={setHamburgerModal}
          setIsActive={setIsActive}
        />
      )}
      <div className="navbar--wrapper">
        <div className="navbar--container">
          <img
            src={backButton}
            className="back--button"
            alt="images"
            onClick={() => navigate("/")}
          />
          <p className="navbar--header">Deshin</p>
          <button
            className={
              isActive ? "navbar--hamburger is-active" : "navbar--hamburger"
            }
            onClick={() => {
              setIsActive((current) => !current);
              setHamburgerModal((current) => !current);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
