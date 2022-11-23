import React, { useEffect, useState } from "react";
import manpower from "./Assets/universal/manpower.svg";
import material from "./Assets/universal/material.svg";
import { useNavigate } from "react-router-dom";
import OverviewCard from "./OverviewCard";

const Overview = ({ setIndividualServiceRequests }) => {
  const navigate = useNavigate();
  const [allServiceRequests, setAllServiceRequests] = useState("");

  //============================== Backend API ============================
  const fetchAllServiceRequests = async () => {
    try {
      const res = await fetch(`http://127.0.0.1:8002/servicerequests/`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "GET",
      });
      const data = await res.json();
      setAllServiceRequests(data);
    } catch (e) {
      console.error(e);
    }
  };

  const fetchServiceRequestById = async (id) => {
    try {
      const res = await fetch(`http://127.0.0.1:8002/servicerequests/${id}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "GET",
      });
      const data = await res.json();
      setIndividualServiceRequests(data);
      navigate("/response");
    } catch (e) {
      console.error(e);
    }
  };

  //========================================================================

  const handleCardClick = (id) => {
    fetchServiceRequestById(id);
  };

  //========================= use effect ===========================
  useEffect(() => {
    fetchAllServiceRequests();
  }, []);

  console.log(allServiceRequests);

  return (
    <div>
      <div className="homepage--container">
        <div className="homepage--header--container mb24">
          <span className="fs32 fw700 white">Overview</span>
        </div>
        <span className="fs16 fw700 white mb8">Today's submission</span>
        {allServiceRequests &&
          allServiceRequests.map((item, i) => {
            return (
              <OverviewCard
                item={item}
                handleCardClick={handleCardClick}
                i={i}
              />
            );
          })}

        <div className="homepage--submission--container mb24">
          <span className="fs16 fw700 white mb8">Today's submission</span>
          <div className="category--cards--container--overview">
            <div className="category--cards--box">
              <img
                src={manpower}
                className="category--cards--icon"
                alt="images"
              ></img>
              <div className="category--cards--text fw700">Manpower</div>
            </div>
            <div className="category--cards--box ml12">
              <img
                src={material}
                className="category--cards--icon"
                alt="images"
              ></img>
              <div className="category--cards--text fw700">Material</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
