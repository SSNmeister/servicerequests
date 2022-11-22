import React from "react";
import tick from "./Assets/universal/tick.svg";

const OverviewCard = ({ item, handleCardClick }) => {
  return (
    <div>
      <div
        className="overview--submission--container mb24"
        onClick={() => handleCardClick(item.id)}
      >
        <div className="overview--page--submissions--green fs16 fw700">
          <div className="overview--project--box">
            <span className="overview--project--header">Project:</span>
            <span className="overview--project--text">{item.project}</span>
          </div>

          <div className="overview--project--box">
            <span className="overview--project--header">Job Item:</span>
            <span className="overview--project--text">{item.job_Item}</span>
          </div>

          <div className="overview--project--box">
            <span className="overview--project--header">Location:</span>
            <span className="overview--project--text">{item.location}</span>
          </div>
          <div className="overview--project--box">
            <span className="overview--project--header">Workers:</span>
            {item.workers.map((worker) => {
              return (
                <div>
                  <img src={tick} alt="images"></img>
                  <span className="overview--project--text ml12">{worker}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;
