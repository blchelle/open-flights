import React, { useState, useEffect } from "react";
import axios from "axios";

const Airlines = () => {
  const [airlines, setAirlines] = useState([]);

  useEffect(() => {
    // Gets all of our airlines from api
    axios
      .get("/api/v1/airlines")
      .then((res) => {
        let data = res.data.data;
        setAirlines(data.map((airline) => airline.attributes));
      })
      .catch((res) => console.log(res));

    // Updates airlines state
  }, []);

  return (
    <>
      <p>This is a list of all the airlines</p>
      {airlines.map((airline) => (
        <p>{airline.name}</p>
      ))}
    </>
  );
};

export default Airlines;
