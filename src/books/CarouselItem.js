import React from "react";
import styled from "styled-components";
import { IoAdd } from "react-icons/io5";

import { colors } from "../utils/colors";

const Book = styled.div`
  font-size: 2rem;
  width: 11rem;
  height: 100%;

  border-radius: 6px;
  box-shadow: 0 0 4px ${colors.grey};
`;

function CarouselItem() {
  return (
    <>
      <Book>
        <IoAdd />
      </Book>
      <Book>
        <IoAdd />
      </Book>
      <Book>
        <IoAdd />
      </Book>
    </>
  );
}

export default CarouselItem;
