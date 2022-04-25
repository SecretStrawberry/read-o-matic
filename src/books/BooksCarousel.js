import React from "react";
import styled from "styled-components";

import { colors } from "../utils/colors";

import CarouselItem from "./CarouselItem";

const CarouselWrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;200;300;400&display=swap");

  background-color: ${colors.vanilla};
  box-shadow: 0 0 4px ${colors.grey};
  height: 22rem;
  margin-top: 2rem;

  padding: 1rem 1rem;

  overflow: hidden;

  & > h2 {
    font-size: 1.6rem;
    font-family: "Josefin Sans", sans-serif;
    font-weight: 500;
  }
`;

const ItemsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr;
  justify-content: start;

  height: 85%;
  column-gap: 1rem;

  margin-top: 1rem;
`;

function BooksCarousel() {
  return (
    <CarouselWrapper>
      <h2>Currently reading</h2>
      <ItemsContainer>
        <CarouselItem />
      </ItemsContainer>
    </CarouselWrapper>
  );
}

export default BooksCarousel;
