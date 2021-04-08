import React from "react";
import { useHistory } from "react-router-dom";
import { Avatar, Box, Button, Text, VStack } from "@chakra-ui/react";
import Airline from "../types/Airline";

interface AirlineCardProps {
  airline: Airline;
}

const AirlineCard: React.FC<AirlineCardProps> = ({
  airline: { name, image_url, slug, avg_score },
}) => {
  const history = useHistory();

  return (
    <VStack border="2px solid #DDD" paddingY={5}>
      <Avatar src={image_url} bg="white" border="1px solid #DDD" />
      <Box fontWeight="bold">
        <Text>{name}</Text>
      </Box>
      <Button onClick={() => history.push(`/airlines/${slug}`)}>
        View Airline
      </Button>
    </VStack>
  );
};

export default AirlineCard;
