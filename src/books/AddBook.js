import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { keyframes } from "styled-components";

import { colors } from "../utils/colors";

import { IoArrowBack } from "react-icons/io5";

const moveFromLeft = keyframes`
  0% {
    transform: translateX(-5rem)
  }
  100% {
    transform: translateX(0)
  }
`;

const FormWrapper = styled.div`
  padding: 1rem 2rem;

  animation: ${moveFromLeft};
  animation-duration: 0.3s;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;
`;
const FormBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;

  width: 100%;

  font-size: 2rem;

  & > h2 {
    margin: 0 auto;
    font-size: 1.4rem;
  }
`;

const StyledInput = styled.input`
  border: none;
  &:focus {
    outline: none;
  }

  font-size: 1.6rem;

  padding: 0.5rem 1rem;

  border-radius: 5px;
  box-shadow: 0 0 4px ${colors.greyLight};
  background-color: ${colors.vanilla};
`;

const StyledLink = styled(Link)`
  color: ${colors.black};
`;

function AddBook() {
  return (
    <FormWrapper>
      <FormBody>
        <Header>
          <StyledLink to="/">
            <IoArrowBack />
          </StyledLink>
          <h2>Add Book</h2>
        </Header>
        <StyledInput placeholder="Add new book" />
      </FormBody>
    </FormWrapper>
  );
}

export default AddBook;
