import { StarIcon } from "@chakra-ui/icons";
import { HStack } from "@chakra-ui/layout";
import React from "react";

interface StarsProps {
  score: number;
  size: number;
}

const Stars: React.FC<StarsProps> = ({ score, size }) => {
  console.log("Rending stars with score" + score);

  return (
    <HStack>
      {new Array(Math.round(score)).fill(0).map(() => (
        <StarIcon w={size} h={size} color="yellow.300" />
      ))}
      {new Array(5 - Math.round(score)).fill(0).map(() => (
        <StarIcon w={size} h={size} color="gray.100" />
      ))}
    </HStack>
  );
};

export default Stars;
