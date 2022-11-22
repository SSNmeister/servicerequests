import React from "react";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import "./style.css";
import ManpowerRequestForm from "./ManpowerRequestForm";
import HomepageWorker from "./HomepageWorker";
import Overview from "./Overview";
import Response from "./Response";

export default function App() {
  return (
    <div>
      {/* <Routes> */}
      <Navbar />
      {/* <Overview /> */}
      <Response />
      {/* <ManpowerRequestForm /> */}
      <HomepageWorker />
      {/* </Routes> */}
    </div>
  );
}
