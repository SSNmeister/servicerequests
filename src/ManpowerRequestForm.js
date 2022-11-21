import React, { useState } from "react";

const ManpowerRequestForm = () => {
  const [projectName, setProjectName] = useState("");
  const [date, setDate] = useState("");
  const [mainContractor, setMainContractor] = useState("");
  const [pic, setPIC] = useState("");
  const [jobItem, setJobItem] = useState("");
  const [location, setLocation] = useState("");
  const [workers, setWorkers] = useState([]);
  const [requestArray, setRequestArray] = useState([]);

  const handleAddRequest = () => {
    const array = [
      ...requestArray,
      { job_Item: jobItem, location: location, workers: workers },
    ];
    setRequestArray(array);
    clearInput();
  };

  console.log(requestArray);

  //--------------------clear input field---------------------
  function clearInput() {
    var getValue = document.getElementById("valueID");
    if (getValue.value != "") {
      getValue.value = "";
    }
  }

  return (
    <div className="create--request--container">
      <div className="create--request--header--container mb24">
        <p className="m0 fs24 fw700 mb8 mt24 white create--request--header--font">
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
        <span className="fs16 fw700 white">Request:</span>
        {requestArray.map((details) => {
          return (
            <div className="add--service--input--container mt8 mb24">
              <span className="fs16 fw700 black mb8 fs24 fw700">
                Request {requestArray.length}
              </span>
              <span className="fs16 fw700 black mb8 fs12 fw700">Job item:</span>
              <div className="add--service--input--forms--full mb8">
                <div className="created--request--input">
                  {details.job_Item}
                </div>
              </div>
              <span className="fs16 fw700 black mb8 fs12 fw700">Location:</span>
              <div className="add--service--input--forms--full mb8">
                <div className="created--request--input">
                  {details.job_Item}
                </div>
              </div>
              <span className="fs16 fw700 black mb8 fs12 fw700">
                Worker's Name:
              </span>
              <div className="add--service--input--forms--full mb8">
                <div className="created--request--input">
                  {details.job_Item}
                </div>
              </div>
            </div>
          );
        })}
        <div className="add--service--input--container mt8 mb24">
          <span className="fs16 fw700 black mb8 fs24 fw700">Add Request</span>
          <span className="fs16 fw700 black mb8 fs12 fw700">Job item:</span>
          <div className="add--service--input--forms--full mb8">
            <input
              type="text"
              placeholder="Job item"
              className="create--request--input"
              value={jobItem}
              id="valueID"
              onChange={(e) => {
                setJobItem(e.target.value);
              }}
            />
          </div>
          <span className="fs16 fw700 black mb8 fs12 fw700">Location:</span>
          <div className="add--service--input--forms--full mb8">
            <input
              type="text"
              placeholder="Location"
              value={location}
              className="create--request--input"
              id="valueID"
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            />
          </div>
          <span className="fs16 fw700 black mb8 fs12 fw700">
            Worker's Name:
          </span>
          <div className="add--service--input--forms--full mb8">
            <input
              type="text"
              placeholder="e.g Safiku"
              value={workers}
              className="create--request--input"
              id="valueID"
              onChange={(e) => {
                setWorkers(e.target.value);
              }}
            />
          </div>
        </div>
        <button
          className="add--request--button mb8 white"
          onClick={() => {
            handleAddRequest();
            setJobItem(null);
            setLocation(null);
            setWorkers(null);
          }}
        >
          Add Request
        </button>
      </div>
    </div>
  );
};

export default ManpowerRequestForm;
