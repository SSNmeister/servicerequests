import React from "react";
import tick from "./Assets/universal/tick.svg";

const OverviewCard = ({ item, i, handleCardClick }) => {
  return (
    <>
      <div className="homepage--header--container mb8">
        <span className="fs24 fw700 white">Submission {i + 1}</span>
      </div>
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
            <div className="overview--worker--container">
              {item.jobs.map((item, i) => {
                let x = JSON.parse(item);
                return (
                  <div className="over--worker--box mb8">
                    <span className="overview--project--header fw700">
                      Jobs {i + 1}
                    </span>
                    <div className="jobs--box">
                      <div className="individual--jobs--box">
                        <img src={tick} alt="images"></img>
                        <span className="ml8">Job item:</span>
                        <span className="overview--project--text ml12">
                          {x.jobItem}
                        </span>
                      </div>
                      <div className="individual--jobs--box mt8">
                        <img src={tick} alt="images"></img>
                        <span className="ml8">Location:</span>
                        <span className="overview--project--text ml12">
                          {x.location}
                        </span>
                      </div>
                      <div className="individual--jobs--box">
                        <img src={tick} alt="images"></img>
                        <div className="individual--workers--box ml12">
                          {x.workers.map((workers) => {
                            return (
                              <span className="fs16 fw300">{workers}</span>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="homepage--submission--container mb24"></div>
    </>
    // <div>
    //   <div
    //     className="overview--submission--container mb24"
    //     onClick={() => handleCardClick(item.id)}
    //   >
    //     <div className="overview--page--submissions--green fs16 fw700">
    //       <div className="overview--project--box">
    //         <span className="overview--project--header">Project:</span>
    //         <span className="overview--project--text">{item.project}</span>
    //       </div>

    //       <div className="overview--project--box">
    //         <span className="overview--project--header">Job Item:</span>
    //         <span className="overview--project--text">{item.job_Item}</span>
    //       </div>

    //       <div className="overview--project--box">
    //         <span className="overview--project--header">Location:</span>
    //         <span className="overview--project--text">{item.location}</span>
    //       </div>
    //       <div className="overview--project--box">
    //         <span className="overview--project--header">Workers:</span>
    //         {item.workers.map((worker) => {
    //           return (
    //             <div>
    //               <img src={tick} alt="images"></img>
    //               <span className="overview--project--text ml12">{worker}</span>
    //             </div>
    //           );
    //         })}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default OverviewCard;
