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
  return (
    <div>
      <Navbar />
      {/* <Responded />  */}
      <Routes>
        <Route path="/" element={<HomepageWorker />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/response" element={<Response />} />
        <Route path="/manpowerrequestform" element={<ManpowerRequestForm />} />
        <Route path="/submission" element={<Submission />} />
        <Route path="/responded" element={<Responded />} />
      </Routes>
    </div>
  );
}
