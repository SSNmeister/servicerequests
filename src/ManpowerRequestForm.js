import React, { useState } from "react";

const ManpowerRequestForm = () => {
  const [projectName, setProjectName] = useState("");
  const [date, setDate] = useState("");
  const [mainContractor, setMainContractor] = useState("");
  const [pic, setPIC] = useState("");

  return (
    <div className="create--request--container">
      <div className="create--request--header--container mb24">
        <p className="m0 fs24 fw700 mb8 mt60 white create--request--header--font">
          Manpower Request Form.
        </p>
        <span className="fs14 fw400 white">
          This form must be sent before 4pm for next day works.
        </span>
      </div>
      <div className="create--request--middle--container mb36">
        <span className="fs16 fw700 white">Project:</span>
        <div className="project--name--container mt8 mb24">
          <div className="universal--input--forms--full">
            <input
              type="text"
              placeholder="Project name"
              className="create--request--input ml12"
              onChange={(e) => setProjectName(e.target.value)}
            />
          </div>
        </div>
        <span className="fs16 fw700 white">Date:</span>
        <div className="project--name--container mt8 mb24">
          <div className="universal--input--forms--full">
            <input
              type="text"
              maxLength={50}
              placeholder="DD/MM/YYYY"
              className="create--request--input ml12"
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>
        <span className="fs16 fw700 white">Main Contractor:</span>
        <div className="project--name--container mt8 mb24">
          <div className="universal--input--forms--full mb8">
            <input
              type="text"
              placeholder="e.g. Takenaka Corporation"
              className="create--request--input ml12"
              onChange={(e) => {
                setMainContractor(e.target.value);
              }}
            />
          </div>
        </div>
        <span className="fs16 fw700 white">PIC name:</span>
        <div className="project--name--container mt8 mb24">
          <div className="universal--input--forms--full mb8">
            <input
              type="text"
              placeholder="e.g. Ram"
              className="create--request--input ml12"
              onChange={(e) => {
                setPIC(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManpowerRequestForm;
