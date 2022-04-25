import React from "react";
import styled from "styled-components";
import { colors } from "../utils/colors";

const LibraryWrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;200;300;400&display=swap");

  margin-top: 2rem;

  padding: 3rem 2rem;
  box-shadow: 0 0 4px ${colors.grey};

  font-family: "Josefin Sans", sans-serif;

  & > h2 {
    font-size: 1.7rem;
  }
`;

const LibraryList = styled.div`
  margin-top: 2rem;
`;

const ListItem = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;

  font-size: 1.9rem;

  padding: 0.5rem 1rem;

  border-bottom: 1px solid ${colors.greyLight};

  &:not(:last-of-type) {
    margin-bottom: 1.5rem;
  }

  & > span {
    font-weight: 400;
  }
`;

function BooksLibrary() {
  return (
    <LibraryWrapper>
      <h2>Library</h2>
      <LibraryList>
        <ListItem>
          <span>My Books</span>
          <span>20</span>
        </ListItem>
        <ListItem>
          <span>Currently reading</span>
          <span>2</span>
        </ListItem>
        <ListItem>
          <span>Finished reading</span>
          <span>7</span>
        </ListItem>
        <ListItem>
          <span>Want to read</span>
          <span>11</span>
        </ListItem>
      </LibraryList>
    </LibraryWrapper>
  );
}

export default BooksLibrary;
