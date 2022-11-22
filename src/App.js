import React, { useState } from "react";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import "./style.css";
import ManpowerRequestForm from "./ManpowerRequestForm";
import HomepageWorker from "./HomepageWorker";
import Overview from "./Overview";
import Response from "./Response";
import Submission from "./Submission";
import Responded from "./Responded";

export default function App() {
  const [projectName, setProjectName] = useState("");
  const [date, setDate] = useState("");
  const [mainContractor, setMainContractor] = useState("");
  const [pic, setPIC] = useState("");
  const [jobItem, setJobItem] = useState("");
  const [location, setLocation] = useState("");
  const [workers, setWorkers] = useState([]);
  const [requestArray, setRequestArray] = useState([]);

  console.log(requestArray);
  return (
    <div>
      <Navbar />
      {/* <Responded />  */}
      <Routes>
        <Route path="/" element={<HomepageWorker />} />
        <Route path="/overview" element={<Overview />} />
        <Route
          path="/response"
          element={
            <Response
              projectName={projectName}
              setProjectName={setProjectName}
              date={date}
              setDate={setDate}
              workers={workers}
              mainContractor={mainContractor}
              pic={pic}
            />
          }
        />
        <Route
          path="/manpowerrequestform"
          element={
            <ManpowerRequestForm
              jobItem={jobItem}
              location={location}
              workers={workers}
              setProjectName={setProjectName}
              projectName={projectName}
              setDate={setDate}
              setMainContractor={setMainContractor}
              setPIC={setPIC}
              setJobItem={setJobItem}
              setLocation={setLocation}
              setWorkers={setWorkers}
              requestArray={requestArray}
              setRequestArray={setRequestArray}
            />
          }
        />
        <Route
          path="/submission"
          element={<Submission requestArray={requestArray} />}
        />
      </Routes>
    </div>
  );
}
