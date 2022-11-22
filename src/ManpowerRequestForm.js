import React, { useState } from "react";
import downArrow from "./Assets/universal/down.svg";
import dummyData from "./DummyData/dummyData";

const ManpowerRequestForm = ({
  jobItem,
  location,
  workers,
  setProjectName,
  setDate,
  setMainContractor,
  setPIC,
  setJobItem,
  setLocation,
  setWorkers,
  requestArray,
  setRequestArray,
}) => {
  //====================Open & Close of Worker's Names================================
  const [openWorkers, setOpenWorkers] = useState(false);

  const handleAddRequest = () => {
    const array = [
      ...requestArray,
      { job_Item: jobItem, location: location, workers: workers },
    ];
    setRequestArray(array);
    clearInput();
  };

  const handleClickWorkers = () => {
    setOpenWorkers((current) => !current);
  };

  const handleWorker = (details) => {
    const array = [...workers, details];
    setWorkers(array);
    handleClickWorkers();
  };

  //--------------------clear input field---------------------
  function clearInput() {
    setJobItem("");
    setLocation("");
    setWorkers("");
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
                Request {details.length}
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
              className="create--request--input--request"
              value={jobItem}
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
              className="create--request--input--request"
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            />
          </div>
          <span className="fs16 fw700 black mb8 fs12 fw700">
            Worker's Name:
          </span>
          {workers && (
            <div>
              {workers.map((worker) => {
                return <div className="added--workers--forms">{worker}</div>;
              })}
            </div>
          )}

          <div className=" add--service--input--forms--full--container">
            <div
              className="add--service--input--forms--full"
              onClick={handleClickWorkers}
            >
              <img src={downArrow} className="down--arrow" />
            </div>
            {openWorkers && (
              <div className="add--service--input--forms--full--workers">
                {dummyData.map((worker) => {
                  return (
                    <div
                      className="add--service--input--forms--full--workers--individual white fs16"
                      onClick={() => {
                        handleWorker(worker.name);
                      }}
                    >
                      {worker.name}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <button
          className="add--request--button mb16 white"
          onClick={() => {
            handleAddRequest();
          }}
        >
          Add Request
        </button>
        <span className="mt8 fs16 fw700 white">Total manpower:</span>
        <div className="project--name--container mt8 mb24">
          <div className="universal--input--forms--full mb8">
            <input
              type="text"
              placeholder="e.g. 4"
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
