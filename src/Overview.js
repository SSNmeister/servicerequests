import React from "react";
import manpower from "./Assets/universal/manpower.svg";
import material from "./Assets/universal/material.svg";
import tick from "./Assets/universal/tick.svg";

const Overview = () => {
  return (
    <div>
      <div className="homepage--container">
        <div className="homepage--header--container mb24">
          <span className="fs32 fw700 white">Overview</span>
        </div>
        <div className="homepage--submission--container mb24">
          <span className="fs16 fw700 white mb8">Today's submission</span>
          <div className="overview--page--submissions--green fs16 fw700">
            <div className="overview--project--box">
              <span className="overview--project--header">Project:</span>
              <span className="overview--project--text">T2E</span>
            </div>

            <div className="overview--project--box">
              <span className="overview--project--header">Job Item:</span>
              <span className="overview--project--text">
                Terminal 2 Installation
              </span>
            </div>

            <div className="overview--project--box">
              <span className="overview--project--header">Location:</span>
              <span className="overview--project--text">
                Changi Airport T2, B2
              </span>
            </div>
            <div className="overview--project--box">
              <span className="overview--project--header">Workers:</span>
              <div>
                <img src={tick} alt="images"></img>
                <span className="overview--project--text ml12">Example</span>
              </div>
            </div>
          </div>
        </div>
        <div className="homepage--submission--container mb24">
          <span className="fs16 fw700 white mb8">Today's submission</span>
          <div className="category--cards--container--overview">
            <div className="category--cards--box">
              <img
                src={manpower}
                className="category--cards--icon"
                alt="images"
              ></img>
              <div className="category--cards--text fw700">Manpower</div>
            </div>
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
      </div>
    </div>
  );
};

export default Overview;
