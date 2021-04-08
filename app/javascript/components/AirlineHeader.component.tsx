import { Avatar } from "@chakra-ui/avatar";
import { StarIcon } from "@chakra-ui/icons";
import { Heading, HStack } from "@chakra-ui/layout";
import { Stack } from "@chakra-ui/react";
import React from "react";
import Airline from "../types/Airline";
import Review from "../types/Review";
import Stars from "./Stars.component";

interface AirlineHeaderProps {
  airline: Airline;
  reviews: Review[];
}

const AirlineHeader: React.FC<AirlineHeaderProps> = ({
  airline: { name, image_url, avg_score },
  reviews,
}) => {
  return (
    <Stack spacing={4}>
      <HStack spacing={4}>
        <Avatar size="lg" src={image_url} bg="white" border="2px solid #CCC" />
        <Heading size="3xl">{name}</Heading>
      </HStack>
      <Heading size="md">{reviews.length} Reviews</Heading>
      <Stars score={avg_score} size={10} />
      <Heading size="lg" fontWeight="light">
        {avg_score.toFixed(1)} out of 5 stars
      </Heading>
    </Stack>
  );
};

export default AirlineHeader;
