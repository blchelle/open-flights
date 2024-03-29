import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Airline from "../types/Airline";
import { CircularProgress } from "@chakra-ui/progress";
import { Flex, Grid, Stack, VStack } from "@chakra-ui/react";
import AirlineHeader from "../components/AirlineHeader.component";
import Review from "../types/Review";
import ReviewForm from "../components/ReviewForm.component";
import ReviewCard from "../components/ReviewCard.component";

interface PageParams {
  slug: string;
}

const AirlinePage = () => {
  const [airline, setAirline] = useState<Airline>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  const params = useParams() as PageParams;

  useEffect(() => {
    let { slug } = params;
    axios(`/api/v1/airlines/${slug}`)
      .then((res) => {
        setTimeout(() => {
          let { data } = res.data;

          let airline: Airline = {
            id: data.id,
            ...data.attributes,
          };

          console.log(res);

          setAirline(airline);
          setReviews(res.data.included.map((r) => r.attributes));
          setLoading(false);
        }, 500);
      })
      .catch((err) => console.log(err));
  }, []);

  const addReview = (r: Review) => {
    // Updates the airlines average score
    const newAvgScore =
      (airline.avg_score * reviews.length + r.score) / (reviews.length + 1);
    setAirline({ ...airline, avg_score: newAvgScore });

    // Pushes the review
    setReviews([...reviews, r]);
  };

  if (loading)
    return (
      <Flex h="100%" w="100%" justifyContent="center" alignItems="center">
        <CircularProgress isIndeterminate color="black" />
      </Flex>
    );
  return (
    <Grid
      w="100%"
      h="100%"
      gridTemplateColumns="repeat(auto-fit, minmax(650px, 1fr))"
    >
      <Stack p={16} justify="center" spacing={24}>
        <AirlineHeader airline={airline} reviews={reviews} />;
        <Stack>
          {reviews.map((r) => (
            <ReviewCard review={r} />
          ))}
        </Stack>
      </Stack>
      <ReviewForm airline={airline} onSuccess={addReview} />
    </Grid>
  );
};

export default AirlinePage;
