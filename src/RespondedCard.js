import React from "react";
import tick from "./Assets/universal/tick.svg";
const RespondedCard = ({ services }) => {
  console.log(services.workers);
  return (
    <div>
      <div className="homepage--submission--container mb24">
        <span className="fs16 fw700 white mb8">Today's submission</span>
        <div className="overview--page--submissions--green fs16 fw700">
          <div className="overview--project--box">
            <span className="overview--project--header">Project:</span>
            <span className="overview--project--text">{services.project}</span>
          </div>
          <div className="overview--project--row--box">
            <div className="overview--project--box--unique1">
              <span className="overview--project--header">Transport:</span>
              <span className="overview--project--text">
                {services.transport}
              </span>
            </div>
            <div className="overview--project--box--unique2">
              <span className="overview--project--header">Pax:</span>
              <span className="overview--project--text">{services.pax}</span>
            </div>
          </div>

          <div className="overview--project--row--box">
            <div className="overview--project--box--unique1">
              <span className="overview--project--header">Job Item:</span>
              <span className="overview--project--text">
                {services.job_item}
              </span>
            </div>
            <div className="overview--project--box--unique2">
              <span className="overview--project--header">Pick Up Time:</span>
              <span className="overview--project--text">{services.time}</span>
            </div>
          </div>

          <div className="overview--project--box">
            <span className="overview--project--header">Location:</span>
            <span className="overview--project--text">{services.location}</span>
          </div>
          <div className="overview--project--box">
            <span className="overview--project--header">Workers:</span>
            <div>
              {services.workers.length !== 0 &&
                services.workers.map((worker) => {
                  return (
                    <div className="responded--workers--names">
                      <img src={tick} alt="images"></img>
                      <span className="overview--project--text ml12">
                        {worker}
                      </span>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RespondedCard;
