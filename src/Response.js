import React from "react";

const Response = () => {
  return (
    <div>
      <div className="response--container">
        <div className="homepage--header--container mb24">
          <span className="fs32 fw700 white">Overview</span>
        </div>
        <div className="create--request--middle--container mb36">
          <span className="fs16 fw700 white">Project:</span>
          <div className="project--name--container mt8 mb24">
            <div className="universal--input--forms--full">
              <span>Project name</span>
            </div>
          </div>
          <span className="fs16 fw700 white">Date:</span>
          <div className="project--name--container mt8 mb24">
            <div className="universal--input--forms--full">
              <span>Project name</span>
            </div>
          </div>
          <div className="response--pickuptime--pax--box">
            <div className="response--pickuptime--pax--inner--box">
              <span className="fs16 fw700 white">Pick-up Time:</span>
              <div className="project--name--container mt8 mb24">
                <div className="universal--input--forms--smaller--half">
                  <span>Project name</span>
                </div>
              </div>
            </div>
            <div className="response--pickuptime--pax--inner--box">
              <span className="fs16 fw700 white">Pax:</span>
              <div className="project--name--container mt8 mb24">
                <div className="universal--input--forms--smaller--half">
                  <span>Project name</span>
                </div>
              </div>
            </div>
          </div>

          <span className="fs16 fw700 white">Transport:</span>
          <div className="project--name--container mt8 mb24">
            <div className="universal--input--forms--full mb8">
              <span>Transport name</span>
            </div>
          </div>

          <span className="fs16 fw700 white">Workers:</span>
          <div className="project--name--container mt8 mb24">
            <div className="universal--input--forms--full mb8">
              <span>Worker name</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Response;
