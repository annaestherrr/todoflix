//Libs
import React from "react";
import styled from "styled-components";

//Components
import MovieItem from "./MovieItem";

//Styles

const Body = styled.div`
  background-color: black;
  min-height: 100vh;
  width: 100%;

  h1 {
    margin: 0;
    padding-left: 8rem;
    font-weight: 300;
    font-family: Arial, Bold;
    color: white;

    @media (max-width: 480px) {
      display: flex;
      justify-content: center;
      padding: 1rem;
    }
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: wrap;
  justify-content: start;
`;

const BoxMovieItem = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: center;
`;

export default class Favorites extends React.Component {
  render() {
    return (
      <Body>
        <h1>Favoritos</h1>
        <Container>
          <BoxMovieItem>
            {this.props.list.map((item) => (
              <MovieItem
                item={item}
                handleFavorite={this.props.handleFavorite}
                handleModalMovie={this.props.handleModalMovie}
              />
            ))}
          </BoxMovieItem>
        </Container>
      </Body>
    );
  }
}
