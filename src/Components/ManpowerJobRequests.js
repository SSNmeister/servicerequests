import React from "react";
import cross from "../Assets/universal/cross.svg";

const ManpowerJobRequests = ({
  item,
  index,
  handleDeleteJobRequestsFromArray,
}) => {
  return (
    <div className="relative">
      <div className="added--request--container  mt8">
        <img
          src={cross}
          alt="images"
          className="job--card--cross--button"
          onClick={() => {
            handleDeleteJobRequestsFromArray(index);
          }}
        />
        <span className="fs16 fw700 black mt8">Request {index + 1}</span>
        <span className="fs16 fw700 black mb8 mt24">Job item:</span>
        <span className="mb8 white">{item.jobItem}</span>
        <span className="fs16 fw700 black mb8 fs12 fw700">Location:</span>
        <span className="mb8 white">{item.location}</span>

        <span className="fs16 fw700 black mb8 fs12 fw700">Worker's Name:</span>
        <div className="mb16">
          {item.workers.map((worker) => {
            return <span className="white">{worker}</span>;
          })}
        </div>
      </div>
    </div>
  );
};

export default ManpowerJobRequests;
