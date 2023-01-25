import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Container, Radio, Rating } from "./styles";


export function Rate() {
  const [rate, setRate] = useState(0);
  return (
    <Container>
      {[...Array(5)].map((item, index) => {
        const givenRating = index + 1;
        return (
          <label>
            <Radio
              key={Radio}
              type="radio"
              value={givenRating}
              onClick={() => {
                setRate(givenRating);
              }}
            />
            <Rating key={Rating}>
              <FaStar
                key={Rating.star}
                color={
                  givenRating < rate || givenRating === rate
                    ? "#FF859B"
                    : "white"
                }
              />
            </Rating>
          </label>
        );
      })}
    </Container>
  );
};