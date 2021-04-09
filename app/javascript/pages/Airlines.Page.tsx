import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Heading, VStack } from "@chakra-ui/layout";
import AirlineCard from "../components/AirlineCard.component";
import Airline from "../types/Airline";
import { CircularProgress, Flex } from "@chakra-ui/react";

const AirlinesPage = () => {
  const [airlines, setAirlines] = useState<Airline[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Gets all of our airlines from api
    axios
      .get("/api/v1/airlines")
      .then((res) => {
        let data = res.data.data;

        setTimeout(() => {
          setAirlines(
            data.map((airline) => ({
              id: airline.id,
              ...airline.attributes,
            }))
          );

          setIsLoading(false);
        }, 500);
      })
      .catch((res) => console.log(res));

    // Updates airlines state
  }, []);

  if (isLoading) {
    return (
      <Flex h="100%" w="100%" justifyContent="center" alignItems="center">
        <CircularProgress isIndeterminate color="black" />
      </Flex>
    );
  }

  return (
    <VStack spacing={16} p={4} h="100%" justify="center">
      <VStack spacing={8}>
        <Heading size="2xl" fontWeight="extrabold">
          OpenFlights
        </Heading>
        <Heading size="lg" fontWeight="hairline" textAlign="center">
          Honest, unbiased airline reviews. Share your experience
        </Heading>
      </VStack>
      <Grid
        gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))"
        gap={10}
        w="min(90%, 1200px)"
      >
        {airlines.map((airline) => (
          <AirlineCard key={airline.slug} airline={airline} />
        ))}
      </Grid>
    </VStack>
  );
};

export default AirlinesPage;
