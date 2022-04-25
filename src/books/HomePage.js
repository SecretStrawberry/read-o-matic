import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { keyframes } from "styled-components";

import { colors } from "../utils/colors";

import BooksCarousel from "./BooksCarousel";
import BooksLibrary from "./BooksLibrary";
import { IoAdd } from "react-icons/io5";

const moveFromRight = keyframes`
  0% {
    transform: translateX(5rem)
  }
  100% {
    transform: translateX(0)
  }
`;

const Home = styled.div`
  min-height: 100vh;
  width: 100%;
  padding-top: 1rem;
  background-color: ${colors.white};
  color: ${colors.black};

  animation: ${moveFromRight};
  animation-duration: 0.3s;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;
`;

const AddBookContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Saira+Condensed:wght@100;200;300;400;500;600;700;800;900&display=swap");
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0.5rem 1rem;

  font-size: 2.5rem;

  & > h2 {
    font-family: "Saira Condensed", sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
  }
`;

const StyledLink = styled(Link)`
  color: ${colors.black};
`;

function HomePage() {
  return (
    <Home>
      <AddBookContainer>
        <h2>Add book</h2>
        <StyledLink to="addBook">
          <IoAdd />
        </StyledLink>
      </AddBookContainer>
      <BooksCarousel />
      <BooksLibrary />
    </Home>
  );
}

export default HomePage;
