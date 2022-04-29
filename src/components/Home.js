//Libs
import React from "react";
import Carousel from "nuka-carousel";

//Image
import Heart from "../assets/heart.svg";
import Like from "../assets/like.svg";

//Components
import MovieItem from "./MovieItem";

//Styles
import styled from "styled-components";

const Body = styled.div`
  min-height: 100vh;
  width: 100%;
  color: white;
  background-color: black;
  font-family: Arial, Bold;

  @media(max-width: 480px) {
  display: flex;
  flex-direction: column;
}
`;

const BoxInitial = styled.div`
  display: flex;
  padding: 4rem;

  @media(max-width: 480px) {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
}
`;

const BoxDescription = styled.div`
  width: 30%;
  padding: 0.5rem;

  @media(max-width: 480px) {
  width: 90%;
}
`;

const ImageBannerInitial = styled.img`
  width: 26rem;
  height: 18rem;
  border-radius: 5px;

  @media(max-width: 480px) {
  width: 90%;
  height: 15rem;
}
`;

const Title = styled.h1`

  @media(max-width: 480px) {
  font-size: 1rem;
}
`;

const Overview = styled.p`
  font-size: 0.8rem;
  font-family: Arial, Regular;
`;

const IconHeart = styled.img`
  width: 1rem;
  height: 1rem;
  position: absolute;

  :hover {
    cursor: pointer;
  }
`;

const SubTitle = styled.h2`
  font-size: 0.9rem;
  padding-top: 1rem;

  @media(max-width: 480px) {
  font-size: 0.8rem;
}
`;

const Nota = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8rem;

  p {
    margin-right: 0.5rem;
  }
`;

const TitleCarousel = styled.h3`
  font-size: 0.9rem;
  margin-bottom: 0;
  padding-left: 1rem;
`;

export default class Home extends React.Component {
 

  handleMainFavorite = () => {
    this.setState({
      mainMovie: {
        ...this.state.mainMovie,
        favorite: !this.state.mainMovie.favorite
      }
    });
  };

  render() {

    const { list } = this.props;

    return (
      <Body>
        <BoxInitial>
          <ImageBannerInitial
            src={list[0].poster}
            alt="Banner do filme"
          />
          <BoxDescription>
            <IconHeart onClick={() => this.props.handleFavorite(list[0].id)} 
              style={
                !list[0].favorite
                  ? { filter: "brightness(0.5)" }
                  : { filter: "drop-shadow(1px 1px 10px rgba(255, 255, 255, 0.5))" }
              }
              src={Heart}
              alt="heart icon"
            />
            <SubTitle>Visto Rescentemente</SubTitle>
            <Title>{list[0].title}</Title>
            <Overview>
              {list[0].overview}
            </Overview>
            <Nota>
              <p>5/5</p>
              <img src={Like} alt="icon like" />
            </Nota>
          </BoxDescription>
        </BoxInitial>

        <div>
          <TitleCarousel>Destaques</TitleCarousel>
          {list.length === 0 ? (
            <p style={{ color: "white", padding: "2rem" }}>
              Nenhum filme encontrado
            </p>
          ) : (
            <Carousel
              renderBottomCenterControls={false}
              slidesToShow={list.length >= 5 ? 5 : list.length}
              wrapAround={true}
              autoplay={false}
              keyCodeConfig={true}
              defaultControlsConfig={{
                nextButtonText: " >",
                prevButtonText: " <",
              }}
            >
              {list.map((item) => (
                <MovieItem
                  item={item}
                  handleFavorite={this.props.handleFavorite}
                />
              ))}
            </Carousel>
          )}
        </div>
      </Body>
    );
  }
}
