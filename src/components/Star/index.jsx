import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Container, Radio, Rating } from "./styles";


export function Rate({star}) {
  const [rate, setRate] = useState(0);
  return (
    <Container>
      {[...Array(5)].map((item, index) => {
        const givenRating = index + 1;
        return (
          <label key={String(givenRating)}>
            <Radio
              type="radio"
              value={givenRating}
              // onClick={() => {
              //   setRate(givenRating);
              // }}
            />
            <Rating>
              <FaStar
                color={
                  star 
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