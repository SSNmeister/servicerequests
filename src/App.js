import React, { useState } from "react";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import "./style.css";
import ManpowerRequestForm from "./ManpowerRequestForm";
import HomepageWorker from "./HomepageWorker";
import Overview from "./Overview";
import Response from "./Response";

export default function App() {
  const [projectName, setProjectName] = useState("");
  const [date, setDate] = useState("");
  const [mainContractor, setMainContractor] = useState("");
  const [pic, setPIC] = useState("");
  const [jobItem, setJobItem] = useState("");
  const [location, setLocation] = useState("");
  const [workers, setWorkers] = useState([]);
  const [requestArray, setRequestArray] = useState([]);

  return (
    <div>
      {/* <Routes> */}
      <Navbar />
      {/* <Overview /> */}
      <Response
        projectName={projectName}
        setProjectName={setProjectName}
        date={date}
        setDate={setDate}
        workers={workers}
      />
      <ManpowerRequestForm
        jobItem={jobItem}
        location={location}
        workers={workers}
        setProjectName={setProjectName}
        setDate={setDate}
        setMainContractor={setMainContractor}
        setPIC={setPIC}
        setJobItem={setJobItem}
        setLocation={setLocation}
        setWorkers={setWorkers}
        requestArray={requestArray}
        setRequestArray={setRequestArray}
      />
      <HomepageWorker />
      {/* </Routes> */}
    </div>
  );
}
