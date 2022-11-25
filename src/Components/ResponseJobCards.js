import React, { useState } from "react";
import cross from "../Assets/universal/cross.svg";
import downArrow from "../Assets/universal/down.svg";
import ConfirmUpdateModal from "./ConfirmUpdateModal";

const ResponseJobCards = ({
  workersData,
  item,
  finalisedJobsArray,
  setFinalisedJobsArray,
}) => {
  console.log(item);
  const [newWorkerArray, setNewWorkerArray] = useState(item.newWorkerArray);
  const [pickUpTime, setPickUpTime] = useState("");
  const [pax, setPax] = useState("");
  const [transport, setTransport] = useState("");
  const [location, setLocation] = useState(item.location);
  const [jobItem, setJobItem] = useState(item.jobItem);
  const [confirmJobItem, setConfirmJobItem] = useState([]);
  //====================Open & Close of Worker's Names================================
  const [openWorkers, setOpenWorkers] = useState(false);
  //=======================================Confirmation Modal=======================================
  const [confirmationModal, setConfirmationModal] = useState(false);
  const [oneTimeClickOnly, setOneTimeClickOnly] = useState(true);
  //======================================================================
  const handleClickWorkers = () => {
    setOpenWorkers((current) => !current);
  };
  const handleWorker = (details) => {
    const array = [...newWorkerArray, details];
    setNewWorkerArray(array);
    handleClickWorkers();
  };
  const handleDelete = (worker) => {
    const remainingArray = newWorkerArray.filter((d, i) => d !== worker);
    setNewWorkerArray(remainingArray);
    console.log(remainingArray);
  };

  const addIntoFinalisedArray = (details) => {
    const array = [...finalisedJobsArray, details];
    setFinalisedJobsArray(array);
  };

  const handleUpdate = () => {
    addIntoFinalisedArray({
      jobItem,
      location,
      pickUpTime,
      pax,
      transport,
      newWorkerArray,
    });
    setConfirmationModal(false);
    setOneTimeClickOnly(false);
  };

  return (
    <div
      className={
        oneTimeClickOnly
          ? "response--job--card--container mb24"
          : "response--job--card--container--activated mb24"
      }
    >
      {confirmationModal && (
        <ConfirmUpdateModal
          setConfirmationModal={setConfirmationModal}
          handleUpdate={handleUpdate}
        />
      )}
      <span className="fs16 fw700 white">Job Item:</span>
      <div className="project--name--container mt8 mb24">
        <div className="universal--input--forms--full">
          <input
            type="text"
            placeholder="Location"
            value={jobItem}
            className="create--request--input ml12"
            onChange={(e) => setJobItem(e.target.value)}
          />
        </div>
      </div>
      <span className="fs16 fw700 white">Location:</span>
      <div className="project--name--container mt8 mb24">
        <div className="universal--input--forms--full">
          <input
            type="text"
            placeholder="Location"
            value={location}
            className="create--request--input ml12"
            onChange={(e) => setLocation(e.target.value)}
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
      <div className="response--container mt8">
        {newWorkerArray.length > 0 &&
          newWorkerArray.map((worker) => {
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
        {newWorkerArray.length === 0 && (
          <span className="response--request--worker">No workers selected</span>
        )}
      </div>
      <div className=" add--service--input--forms--full--container mb24">
        <div
          className="add--service--input--forms--full"
          onClick={handleClickWorkers}
        >
          <span className="white fs14 fw300">Add workers</span>
          <img src={downArrow} className="down--arrow" />
        </div>
        {openWorkers && (
          <div className="add--service--input--forms--full--workers">
            {workersData.map((worker) => {
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
      <div className="button--container">
        <button
          className="update--response--button mb16"
          onClick={() => {
            setConfirmationModal((current) => !current);
          }}
          disabled={
            !oneTimeClickOnly ||
            pickUpTime === "" ||
            transport === "" ||
            pax === "" ||
            newWorkerArray.length === 0
          }
        >
          {oneTimeClickOnly && <span>Update</span>}
          {!oneTimeClickOnly && <span>Successfully Updated</span>}
        </button>
      </div>
    </div>
  );
};

export default ResponseJobCards;
