//Libs
import React from "react";
import styled from "styled-components";
import ReactStars from "react-rating-stars-component";

//Image
import Heart from "../assets/heart.svg";
import BotaoTresPontinhos from "../assets/botao-tres-pontinhos.svg";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  color: white;
  font-size: 0.9rem;
  top: 0;
  z-index: 4;
`;

const BoxContent = styled.div`
  width: 22rem;
  height: 25rem;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 3rem;
  border: #808080 solid 1px;
  border-radius: 0.5rem;
  background-color: #000000;
`;

const ButtonClose = styled.button`
  height: 3rem;
  width: 3rem;
  position: absolute;
  top: 0.5rem;
  right: 2rem;
  outline: none;
  color: white;
  border: transparent;
  background-color: transparent;

  :hover {
    cursor: pointer;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 20rem;
  border-radius: 5px;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0;
`;

const Overview = styled.p`
  margin-bottom: 0;
`;

const BoxButtons = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

const IconHeart = styled.img`
  width: 1rem;
  height: 1rem;
  cursor: pointer;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`;

const Icon = styled.img`
  width: 1rem;
  height: 1rem;
  cursor: pointer;
`;

const ButtonAssisti = styled.button`
  width: 7rem;
  height: 1.5rem;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  background-color: #393939;
`;

export default class ModalMovie extends React.Component {
  state = {};

  render() {
    const { item } = this.props;

    return (
      <Container onClick={() => this.props.handleModalMovie(null)}>
        <BoxContent onClick={(ev) => ev.stopPropagation()}>
          <ButtonClose onClick={() => this.props.handleModalMovie(null)}>
            X
          </ButtonClose>
          <Image src={item.poster}></Image>
          <BoxButtons>
            <ButtonAssisti>JA ASSISTI</ButtonAssisti>
            <IconHeart
              onClick={() => this.props.handleFavorite(item.id)}
              style={
                !item.favorite
                  ? { filter: "brightness(0.5)" }
                  : {
                      filter:
                        "drop-shadow(1px 1px 10px rgba(255, 255, 255, 0.5))",
                    }
              }
              src={Heart}
              alt="heart icon"
            />
            <Icon src={BotaoTresPontinhos} />
          </BoxButtons>
          <Title>{item.title}</Title>
          <Overview>{item.overview}</Overview>
          <ReactStars count={5} size={35} activeColor="#008000" />
        </BoxContent>
      </Container>
    );
  }
}
