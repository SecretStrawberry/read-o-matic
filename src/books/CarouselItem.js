import React from "react";
import styled from "styled-components";

import { IoAdd } from "react-icons/io5";

import { colors } from "../utils/colors";

const Item = styled.div`
  grid-row: 2 / 2;

  font-size: 2rem;

  width: 11rem;
  height: 100%;

  border-radius: 6px;
  box-shadow: 0 0 4px ${colors.grey};
`;

function CarouselItem() {
  return (
    <>
      <Item>
        <IoAdd />
      </Item>
      <Item>
        <IoAdd />
      </Item>
      <Item>
        <IoAdd />
      </Item>
    </>
  );
}

export default CarouselItem;
