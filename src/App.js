import React from "react";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import "./style.css";
import ManpowerRequestForm from "./ManpowerRequestForm";

export default function App() {
  return (
    <div>
      {/* <Routes> */}
      <Navbar />
      <ManpowerRequestForm />
      {/* </Routes> */}
    </div>
  );
}
