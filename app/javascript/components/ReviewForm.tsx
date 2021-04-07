import {
  Box,
  Button,
  DarkMode,
  Heading,
  HStack,
  Input,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Stack,
} from "@chakra-ui/react";
import React, { ChangeEvent, useState } from "react";
import Airline from "../types/Airline";

interface ReviewFormProps {
  airline: Airline;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ airline: { name } }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [score, setScore] = useState(0);

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
  };

  return (
    <Stack bg="black" color="white" p={16} spacing={16}>
      <Heading>Have an experience with {name}? Share your review</Heading>
      <Stack spacing={8}>
        <Input
          placeholder="Review Title"
          bg="white"
          color="black"
          size="lg"
          onChange={handleTextChange}
        />
        <Input placeholder="Description" bg="white" color="black" size="lg" />
        <HStack spacing={16}>
          <Slider
            defaultValue={0}
            min={0}
            max={5}
            step={1}
            onChange={(value) => setScore(value)}
          >
            <SliderTrack bg="gray.400">
              <Box position="relative" right={10} />
              <SliderFilledTrack bg="yellow.300" />
            </SliderTrack>
            <SliderThumb boxSize={6} />
          </Slider>
          <Heading w={100}>{score} / 5</Heading>
        </HStack>
      </Stack>
      <DarkMode>
        <Button colorScheme="yellow" alignSelf="start" size="lg">
          Submit Review
        </Button>
      </DarkMode>
    </Stack>
  );
};

export default ReviewForm;
