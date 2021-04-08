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
import axios from "axios";
import React, { ChangeEvent, useState } from "react";
import Airline from "../types/Airline";
import Review from "../types/Review";

interface ReviewFormProps {
  airline: Airline;
  onSuccess: (r: Review) => void;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ airline, onSuccess }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [score, setScore] = useState(0);

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => (
    setState: React.Dispatch<React.SetStateAction<string>>
  ) => {
    e.preventDefault();
    setState(e.target.value);
  };

  const handleSubmit = () => {
    let review: Review = {
      title,
      description,
      score,
      airline_id: airline.id,
    };

    const csrfToken = document.querySelector("[name=csrf-token]").textContent;
    axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;

    axios
      .post(`/api/v1/reviews`, review)
      .then((res) => {
        onSuccess(res.data.data.attributes);
      })
      .catch((res) => {
        console.log(res);
      });
  };

  return (
    <Stack bg="black" color="white" p={16} spacing={16}>
      <Heading>
        Have an experience with {airline.name}? Share your review
      </Heading>
      <Stack spacing={8}>
        <Input
          placeholder="Review Title"
          bg="white"
          color="black"
          size="lg"
          onChange={(e) => handleTextChange(e)(setTitle)}
        />
        <Input
          placeholder="Description"
          bg="white"
          color="black"
          size="lg"
          onChange={(e) => handleTextChange(e)(setDescription)}
        />
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
        <Button
          colorScheme="yellow"
          alignSelf="start"
          size="lg"
          onClick={handleSubmit}
        >
          Submit Review
        </Button>
      </DarkMode>
    </Stack>
  );
};

export default ReviewForm;
