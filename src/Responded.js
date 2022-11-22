import React, { useEffect, useState } from "react";

import RespondedCard from "./RespondedCard";

const Responded = () => {
  const [respondedServices, setRespondedServices] = useState("");

  const getRespondedServices = async () => {
    try {
      const res = await fetch(
        `http://127.0.0.1:8002/servicerequests/responded`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "GET",
        }
      );
      const data = await res.json();
      setRespondedServices(data);
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getRespondedServices();
  }, []);

  console.log(respondedServices);
  return (
    <div>
      <div className="homepage--container">
        <div className="homepage--header--container mb24">
          <span className="fs32 fw700 white">Responded</span>
        </div>
        {respondedServices &&
          respondedServices.map((services) => {
            return <RespondedCard services={services} />;
          })}

        <div className="homepage--submission--container mb24"></div>
      </div>
    </div>
  );
};

export default Responded;
