import React, { useState, useEffect } from "react";
import axios from "axios";
import AirlineCard from "../components/AirlineCard";
import Airline from "../types/Airline";
import { Grid, Heading, VStack } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/react";

const Airlines = () => {
  const [airlines, setAirlines] = useState<Airline[]>([]);

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
    <VStack spacing={8} mt={32}>
      <Heading size="2xl" fontWeight="extrabold">
        OpenFlights
      </Heading>
      <Heading size="lg" fontWeight="hairline">
        Honest, unbiased airline reviews. Share your experience
      </Heading>
      <Grid gridTemplateColumns="repeat(4, 1fr)" gap={10}>
        {airlines.map((airline) => (
          <AirlineCard airline={airline} />
        ))}
      </Grid>
    </VStack>
  );
};

export default Airlines;
