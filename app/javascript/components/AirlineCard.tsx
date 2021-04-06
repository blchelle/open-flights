import React from "react";
import { Avatar, Box, Button, Text, VStack } from "@chakra-ui/react";
import Airline from "../types/Airline";

interface AirlineCardProps {
  airline: Airline;
}

const AirlineCard: React.FC<AirlineCardProps> = ({
  airline: { name, image_url, slug },
}) => {
  return (
    <VStack border="1px solid #DDD" paddingY={5} w={250}>
      <Avatar src={image_url} />
      <Box fontWeight="bold">
        <Text>{name}</Text>
      </Box>
      <Button>View Airline</Button>
    </VStack>
  );
};

export default AirlineCard;
