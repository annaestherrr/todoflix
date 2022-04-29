//Libs
import React from "react";
import styled from "styled-components";

//Image
import Heart from "../assets/heart.svg";

//Styles

const SlideShow = styled.div`
  width: 259px;
  display: flex;
  flex-direction: column;
  margin: 0.5rem;

  p {
    font-size: 0.8rem;
  }
`;

const IconHeart = styled.img`
  width: 1rem;
  height: 1rem;
  position: absolute;

  :hover {
    cursor: pointer;
  }
`;

const Img = styled.img`
  width: 16rem;
  height: 9rem;
  border-radius: 5px;
`;

const InfosMovie = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BoxNotas = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 480px) {
    display: none;
  }
`;

const NotaMovies = styled.p`
  padding-right: 0.5rem;
  color: white;

  @media (max-width: 480px) {
    display: none;
  }
`;

const TitleMovies = styled.h3`
  font-size: 1rem;
  color: white;

  @media (max-width: 480px) {
    display: none;
  }
`;

const OverviewMovies = styled.p`
  margin-top: 0rem;
  color: white;

  @media (max-width: 480px) {
    margin-top: 0.5rem;
  }
`;

export default class MovieItem extends React.Component {
  getColor = (nota) => {
    if (nota <= 2) return "#FF4141";
    if (nota > 2 && nota <= 3) return "#FFC222";
    return "#6CBE61";
  };

  render() {
    const { item } = this.props;
    return (
      <SlideShow>
        <IconHeart
          onClick={() => this.props.handleFavorite(item.id)}
          style={
            !item.favorite
              ? { filter: "brightness(0.5)" }
              : { filter: "drop-shadow(1px 1px 10px rgba(255, 255, 255, 0.5))" }
          }
          src={Heart}
          alt="heart icon"
        />
        <Img src={item.poster} alt="poster" />
        <InfosMovie>
          <TitleMovies>{item.title}</TitleMovies>
          <BoxNotas>
            <NotaMovies>{item.nota}/5</NotaMovies>
            <svg
              id="Icon_Thumbs_Up_Filled"
              data-name="Icon / Thumbs Up / Filled"
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 17 17"
            >
              <rect id="Box" width="17" height="17" fill="none" />
              <path
                id="Path_1994"
                data-name="Path 1994"
                d="M97-8.286h2.805v-8.229H97Zm15.429-7.543a1.391,1.391,0,0,0-1.4-1.371H106.6l.666-3.134.021-.219a1.021,1.021,0,0,0-.309-.727l-.743-.72-4.615,4.519a1.326,1.326,0,0,0-.414.967v6.857a1.391,1.391,0,0,0,1.4,1.371h6.312a1.394,1.394,0,0,0,1.29-.837l2.118-4.834a1.328,1.328,0,0,0,.1-.5v-1.31l-.007-.007Z"
                transform="translate(-96.143 23.714)"
                fill={this.getColor(item.nota)}
              />
            </svg>
          </BoxNotas>
        </InfosMovie>
        <OverviewMovies>{item.overview}</OverviewMovies>
      </SlideShow>
    );
  }
}
