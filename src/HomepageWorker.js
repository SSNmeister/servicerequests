import React from "react";
import manpower from "./Assets/universal/manpower.svg";
import material from "./Assets/universal/material.svg";
import { NavLink, useNavigate } from "react-router-dom";

const HomepageWorker = () => {
  const navigate = useNavigate();

  const handleSubmissionsPage = () => {
    navigate("/submission");
  };

  const handleRespondedPage = () => {
    navigate("/responded");
  };

  return (
    <div className="homepage--container">
      <div className="homepage--header--container mb24">
        <span className="fs32 fw700 white">Request Forms</span>
      </div>
      <div className="homepage--category--container mb24">
        <span className="fs16 fw700 white mb8">Category</span>
        <div className="category--cards--container">
          <NavLink to="/manpowerrequestform" className="navlinks">
            <div className="category--cards--box">
              <img
                src={manpower}
                className="category--cards--icon"
                alt="images"
              ></img>
              <div className="category--cards--text fw700">Manpower</div>
            </div>
          </NavLink>
          <div className="category--cards--box ml12">
            <img
              src={material}
              className="category--cards--icon"
              alt="images"
            ></img>
            <div className="category--cards--text fw700">Material</div>
          </div>
        </div>
      </div>
      <div className="homepage--submission--container mb24">
        <span className="fs16 fw700 white mb8">Today's submission</span>

        <button
          className="main--buttons--routing--blue fs16 fw700"
          onClick={handleSubmissionsPage}
        >
          Submissions
        </button>
      </div>
      <div className="homepage--submission--container">
        <span className="fs16 fw700 white mb8">Today's response</span>
        <button
          className="main--buttons--routing--green fs16 fw700"
          onClick={handleRespondedPage}
        >
          Response
        </button>
      </div>
    </div>
  );
};

export default HomepageWorker;
