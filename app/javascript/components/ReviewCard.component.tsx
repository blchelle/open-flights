import React from "react";
import { Avatar, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import Stars from "./Stars.component";
import Review from "../types/Review";

interface ReviewCardProps {
  review: Review;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  review: { title, description, score },
}) => {
  return (
    <Stack p={4} border="2px solid #DDD" borderRadius="10px">
      <HStack spacing={8}>
        <Avatar />
        <Stars score={score} size={4} />
        <Heading size="md">testuser1@test.com</Heading>
      </HStack>
      <Heading size="md">{title}</Heading>
      <Text size="lg">{description}</Text>
    </Stack>
  );
};

export default ReviewCard;
