import React from "react";
import { useHistory } from "react-router-dom";
import { Avatar, Box, Button, Text, VStack } from "@chakra-ui/react";
import Airline from "../types/Airline";
import Stars from "./Stars.component";

interface AirlineCardProps {
  airline: Airline;
}

const AirlineCard: React.FC<AirlineCardProps> = ({
  airline: { name, image_url, slug, avg_score },
}) => {
  const history = useHistory();

  return (
    <VStack border="2px solid #DDD" paddingY={5} spacing={8}>
      <VStack>
        <Avatar src={image_url} bg="white" border="1px solid #DDD" />
        <Box fontWeight="bold">
          <Text>{name}</Text>
        </Box>
        <Stars score={avg_score} size={6} />
      </VStack>
      <Button
        onClick={() => history.push(`/airlines/${slug}`)}
        colorScheme="blue"
      >
        View Airline
      </Button>
    </VStack>
  );
};

export default AirlineCard;
