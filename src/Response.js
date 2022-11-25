import React, { useState, useEffect } from "react";
import ConfirmationModal from "./Components/ConfirmationModal";
import { useNavigate } from "react-router-dom";
import ResponseJobCards from "./Components/ResponseJobCards";

const Response = ({ individualServiceRequests }) => {
  const navigate = useNavigate();

  // const [newWorkerArray, setNewWorkerArray] = useState([]);
  const [projectName, setProjectName] = useState(
    individualServiceRequests[0].project
  );
  const [date, setDate] = useState(individualServiceRequests[0].date);
  const [jobsArray, setJobsArray] = useState([]);
  const [finalisedJobsArray, setFinalisedJobsArray] = useState([]);
  console.log(individualServiceRequests);
  console.log(jobsArray);
  console.log(finalisedJobsArray);

  const pushJobCards = (details) => {
    console.log(details);
    jobsArray.push(details);
  };

  const getJobCards = () => {
    for (let i = 0; i < individualServiceRequests[0].jobs.length; i++) {
      pushJobCards(JSON.parse(individualServiceRequests[0].jobs[i]));
    }
  };

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
          response: "yes",
          jobs: finalisedJobsArray,
        }),
      });
      navigate("/overview");
    } catch (e) {
      console.log(e);
    }
  };

  //=======================================Confirmation Modal=======================================
  const [confirmationModal, setConfirmationModal] = useState(false);

  const handleSubmit = () => {
    updateServiceRequestById();
    setConfirmationModal(false);
  };

  //===============================Use Effect================================
  useEffect(() => {
    getWorkers();
    getJobCards();
  }, []);

  return (
    <div>
      {/* {jobsArray.map((item) => {
        return <div>{JSON.parse(item)}</div>;
      })} */}
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
          {jobsArray.map((item) => {
            return (
              <ResponseJobCards
                workersData={workersData}
                item={item}
                setFinalisedJobsArray={setFinalisedJobsArray}
                finalisedJobsArray={finalisedJobsArray}
              />
            );
          })}

          {/* <span className="fs16 fw700 white">Total Manpower:</span>
          <div className="response--container mt8 mb24">
            <span className="fw700 fs56 white">{newWorkerArray.length}</span>
          </div> */}
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
