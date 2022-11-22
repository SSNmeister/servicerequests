import React from "react";
import tick from "./Assets/universal/tick.svg";

const Submission = ({ requestArray }) => {
  console.log(requestArray);
  return (
    <div>
      {requestArray.map((item, i) => {
        <div className="homepage--container">
          <div className="homepage--header--container mb24">
            <span className="fs32 fw700 white">Submission {i}</span>
          </div>
          <div className="homepage--submission--container mb24">
            <span className="fs16 fw700 white mb8">Today's submission</span>
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
                <div>
                  {item.workers.map((worker) => {
                    return (
                      <>
                        <img src={tick} alt="images"></img>
                        <span className="overview--project--text ml12">
                          {worker}
                        </span>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="homepage--submission--container mb24"></div>
        </div>;
      })}
    </div>
  );
};

export default Submission;
