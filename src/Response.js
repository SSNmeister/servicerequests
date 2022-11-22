import React, { useState } from "react";
import dummyData from "./DummyData/dummyData";
import cross from "./Assets/universal/cross.svg";
import ConfirmationModal from "./Components/ConfirmationModal";

const Response = ({ projectName, date, setProjectName, setDate, workers }) => {
  const [newWorkerArray, setNewWorkerArray] = useState(workers);
  const [pickUpTime, setPickUpTime] = useState("");
  const [pax, setPax] = useState("");
  const [transport, setTransport] = useState("");

  //=======================================Confirmation Modal=======================================
  const [confirmationModal, setConfirmationModal] = useState(false);

  const handleDelete = (worker) => {
    const remainingArray = newWorkerArray.filter((d, i) => d !== worker);
    setNewWorkerArray(remainingArray);
    console.log(remainingArray);
  };

  return (
    <div>
      <div className="response--container">
        {confirmationModal && (
          <ConfirmationModal setConfirmationModal={setConfirmationModal} />
        )}
        <div className="homepage--header--container mb24">
          <span className="fs32 fw700 white">Response</span>
        </div>
        <div className="create--request--middle--container mb36">
          <span className="fs16 fw700 white">Project:</span>
          <div className="project--name--container mt8 mb24">
            <div className="universal--input--forms--full">
              <input
                type="text"
                placeholder="Project name"
                value={projectName}
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
                placeholder="Date"
                value={date}
                className="create--request--input ml12"
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>
          <div className="response--pickuptime--pax--box">
            <div className="response--pickuptime--pax--inner--box">
              <span className="fs16 fw700 white">Pick-up Time:</span>
              <div className="project--name--container mt8 mb24">
                <div className="universal--input--forms--smaller--half">
                  <input
                    type="text"
                    placeholder="e.g. 7am"
                    className="create--request--input ml12"
                    onChange={(e) => setPickUpTime(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="response--pickuptime--pax--inner--box">
              <span className="fs16 fw700 white">Pax:</span>
              <div className="project--name--container mt8 mb24">
                <div className="universal--input--forms--smaller--half">
                  <input
                    type="text"
                    placeholder="e.g. 10"
                    className="create--request--input ml12"
                    onChange={(e) => setPax(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          <span className="fs16 fw700 white">Transport:</span>
          <div className="project--name--container mt8 mb24">
            <div className="universal--input--forms--full mb8">
              <input
                type="text"
                placeholder="e.g. Safiku's Lorry"
                className="create--request--input ml12"
                onChange={(e) => setTransport(e.target.value)}
              />
            </div>
          </div>

          <span className="fs16 fw700 white">Workers:</span>
          <div className="response--container mt8 mb24">
            {newWorkerArray.map((worker) => {
              return (
                <>
                  <div className="universal--response--forms--full mb8">
                    <span className="response--request--worker">{worker}</span>
                    <img
                      src={cross}
                      alt="images"
                      className="response--cross--button"
                      onClick={() => {
                        handleDelete(worker);
                      }}
                    />
                  </div>
                </>
              );
            })}
          </div>
          <span className="fs16 fw700 white">Total Manpower:</span>
          <div className="response--container mt8 mb24">
            <div className="universal--response--forms--full mb8">
              <span className="response--request--worker">array.length</span>
            </div>
          </div>
          <div className="response--container mt8 mb24">
            <div className="universal--response--forms--full mb8">
              <button
                className="submit--response--button"
                onClick={() => {
                  setConfirmationModal((current) => !current);
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Response;
