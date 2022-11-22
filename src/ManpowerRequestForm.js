import React, { useEffect, useState } from "react";
import downArrow from "./Assets/universal/down.svg";
import dummyData from "./DummyData/dummyData";
import cross from "./Assets/universal/cross.svg";
import { useNavigate } from "react-router-dom";
import ConfirmationModalWorker from "./Components/ConfirmationModalWorker";

const ManpowerRequestForm = ({}) => {
  const [projectName, setProjectName] = useState("");
  const [date, setDate] = useState("");
  const [mainContractor, setMainContractor] = useState("");
  const [pic, setPIC] = useState("");
  const [jobItem, setJobItem] = useState("");
  const [location, setLocation] = useState("");
  const [workers, setWorkers] = useState([]);
  const [time, setTime] = useState("");
  const [pax, setPax] = useState("");
  const [transport, setTransport] = useState("");

  const navigate = useNavigate();
  //====================Open & Close of Worker's Names================================
  const [openWorkers, setOpenWorkers] = useState(false);

  //====================Open & Close of Confirmation Modal================================
  const [confirmationModalWorker, setConfirmationModalWorker] = useState(false);

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

  const createService = async () => {
    console.log(
      projectName,
      date,
      mainContractor,
      pic,
      jobItem,
      location,
      workers,
      time,
      pax,
      transport
    );
    try {
      const res = await fetch("http://127.0.0.1:8002/servicerequests/", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          project: projectName,
          date: date,
          main_contractor: mainContractor,
          pic: pic,
          job_item: jobItem,
          location: location,
          workers: workers,
          time: time,
          pax: pax,
          transport: transport,
        }),
      });
      setConfirmationModalWorker(false);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };
  //======================================================================

  const handleAddRequest = () => {
    // clearInput();
    setConfirmationModalWorker(true);
  };

  const handleClickWorkers = () => {
    setOpenWorkers((current) => !current);
  };

  const handleWorker = (details) => {
    const array = [...workers, details];
    setWorkers(array);
    handleClickWorkers();
  };

  const handleDelete = (worker) => {
    const remainingArray = workers.filter((d, i) => d !== worker);
    setWorkers(remainingArray);
  };

  //--------------------clear input field---------------------
  function clearInput() {
    setJobItem("");
    setLocation("");
    setWorkers("");
  }

  //===============================Use Effect================================

  useEffect(() => {
    getWorkers();
  }, []);

  return (
    <>
      {confirmationModalWorker && (
        <ConfirmationModalWorker
          createService={createService}
          setConfirmationModalWorker={setConfirmationModalWorker}
        />
      )}
      <div className="create--request--container">
        <div className="create--request--header--container mb24">
          <p className="m0 fs24 fw700 mb8 mt24 white create--request--header--font">
            Manpower Request Form.
          </p>
          <span className="fs14 fw400 white">
            This form must be sent before <span className="red">4pm</span> for
            next day works.
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
                  return (
                    <div className="added--workers--forms relative">
                      {worker}
                      <img
                        src={cross}
                        alt="images"
                        className="response--cross--button"
                        onClick={() => {
                          handleDelete(worker);
                        }}
                      />
                    </div>
                  );
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
          </div>
          <button
            className="add--request--button mb16 white"
            onClick={() => {
              handleAddRequest();
            }}
          >
            Add Request
          </button>
        </div>
        <button
          className="add--request--button mb16 white"
          onClick={() => {
            handleAddRequest();
          }}
          disabled={
            projectName === "" ||
            date === "" ||
            mainContractor === "" ||
            pic === "" ||
            jobItem === "" ||
            location === "" ||
            workers.length === 0
          }
        >
          Add Request
        </button>
      </div>
    </>
  );
};

export default ManpowerRequestForm;
