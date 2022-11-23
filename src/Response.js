import React, { useState, useEffect } from "react";
import dummyData from "./DummyData/dummyData";
import cross from "./Assets/universal/cross.svg";
import downArrow from "./Assets/universal/down.svg";
import ConfirmationModal from "./Components/ConfirmationModal";
import { useNavigate } from "react-router-dom";

const Response = ({ individualServiceRequests }) => {
  const navigate = useNavigate();

  const [newWorkerArray, setNewWorkerArray] = useState(
    individualServiceRequests[0].workers
  );
  const [projectName, setProjectName] = useState(
    individualServiceRequests[0].project
  );
  const [date, setDate] = useState(individualServiceRequests[0].date);
  const [location, setLocation] = useState(
    individualServiceRequests[0].location
  );
  const [pickUpTime, setPickUpTime] = useState("");
  const [pax, setPax] = useState("");
  const [transport, setTransport] = useState("");
  console.log(individualServiceRequests[0]);

  //====================Open & Close of Worker's Names================================
  const [openWorkers, setOpenWorkers] = useState(false);

  //===============================FETCH APIs================================
  const [workersData, setWorkersData] = useState([]);

  const getWorkers = async () => {
    try {
      const res = await fetch(`http://127.0.0.1:8002/workers/`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "GET",
      });
      const data = await res.json();
      setWorkersData(data);
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  const updateServiceRequestById = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8002/servicerequests/", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify({
          id: individualServiceRequests[0].id,
          project: projectName,
          date: date,
          main_contractor: individualServiceRequests[0].main_contractor,
          pic: individualServiceRequests[0].pic,
          job_item: individualServiceRequests[0].job_item,
          location: individualServiceRequests[0].location,
          workers: newWorkerArray,
          time: pickUpTime,
          pax: pax,
          transport: transport,
          response: "yes",
        }),
      });
      navigate("/overview");
    } catch (e) {
      console.log(e);
    }
  };

  //=======================================Confirmation Modal=======================================
  const [confirmationModal, setConfirmationModal] = useState(false);

  const handleDelete = (worker) => {
    const remainingArray = newWorkerArray.filter((d, i) => d !== worker);
    setNewWorkerArray(remainingArray);
    console.log(remainingArray);
  };

  //======================================================================
  const handleClickWorkers = () => {
    setOpenWorkers((current) => !current);
  };
  const handleWorker = (details) => {
    const array = [...newWorkerArray, details];
    setNewWorkerArray(array);
    handleClickWorkers();
  };

  const handleSubmit = () => {
    updateServiceRequestById();
    setConfirmationModal(false);
  };

  //===============================Use Effect================================
  useEffect(() => {
    getWorkers();
  }, []);

  return (
    <div>
      <div className="response--container">
        {confirmationModal && (
          <ConfirmationModal
            setConfirmationModal={setConfirmationModal}
            handleSubmit={handleSubmit}
          />
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
                placeholder={individualServiceRequests[0].project}
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
                      <span className="response--request--worker">
                        {worker}
                      </span>
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
              <span className="response--request--worker">
                No workers selected
              </span>
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
          <span className="fs16 fw700 white">Total Manpower:</span>
          <div className="response--container mt8 mb24">
            <span className="fw700 fs56 white">{newWorkerArray.length}</span>
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
