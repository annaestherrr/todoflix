//Libs
import React from "react";
import Carousel from 'nuka-carousel';

//Image
import BannerIncio from "../assets/banner-inicio.png";

//Styles
import styled from "styled-components";

const Body = styled.div`
  background-color: black;
  color: white;
  font-family: Arial, Bold;
`;

const BoxInitial = styled.div`
  border: red solid;
  display: flex;
  padding: 4rem;
`;

const BoxDescription = styled.div`
  border: yellow solid;
  width: 30%;
  padding: 3rem;
`;

const OverviewCapFantastico = styled.p`
  font-size: 13px;
  font-family: Arial, Regular;
  
`;

const SubTitle = styled.h2`
  font-size: 16px;
`;

const info = {
  slidesToShow: 5,
  wrapAround: true,
  autoplay: false,
  keyCodeConfig: true,
  autoplayInterval: 1000,
};

const Img = styled.img`
    width: 259px;
    height: 145px;
    border-radius: 5px;
`;

const SlideShow = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2rem;

    p{
      font-size: 0.7rem;
    }
`;
const TitleMovies = styled.h3`
    font-size: 1rem;
`;


export default class App extends React.Component {

  state = {
    filmes: [
      {
        poster:'https://i.ytimg.com/vi/6FmnFOhNIVo/hqdefault.jpg',
        title: "Shrek",
        overview: "Para resgatar uma princesa das garras de um dragão que cospe fogo, o ogro Shrek se une a um companheiro improvável: um burro brincalhão.",
      },
      {
        poster:'https://encenasaudemental.com/wp-content/uploads/2016/01/hoje-eu-quero-voltar-sozinho-banner-e1452705882281.jpg',
        title: "Hoje eu quero voltar...",
        overview: "Um novo colega de sala transforma a vida do estudante Leonardo, que também é cego, e complica sua amizade com sua melhor amiga.",
      },
      {
        poster:'https://blog.explorersclub.com.br/wp-content/uploads/2021/06/homem-aranha-3-spider-man-no-way-home.jpg',
        title: "Spider-man",
        overview: "Após ser picado por uma aranha radioativa, o garoto Miles Morales logo aprende a lançar teias com seus parceiros de um universo alternativo.",
      },
      {
        poster:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnA2b8zid98HuLXKhEqvWflPfPyjvIVfTwS_uVPvz2T1_JqbGuauJ8iW7f3-Me_Gc0Iww&usqp=CAU',
        title: "Um Sonho de Liberdade",
        overview: "Após Condenado pelo assassinato da esposa e do amante dela, um banqueiro se apega à esperança e à amizade com um detento chamado Red para sobreviver à prisão. picado por uma aranha radioativa, o garoto Miles Morales logo aprende a lançar teias com seus parceiros de um universo alternativo.",
      },
      {
        poster:'http://1.bp.blogspot.com/-6FdwDrNR8T0/VfG-hBq2EeI/AAAAAAABQK4/Dz7pdXyvJ5o/s320/0.jpg',
        title: "SpideQue Horas Ela Volta?",
        overview: "Val é a fiel empregada domestica de uma família rica. Mas a chegada de sua filha gera tensão na casa e faz com que ela comece a questionar esse papel.",
      },
    ],
  };

  render() {
    return (
      <Body>
        <BoxInitial>
           <img src={BannerIncio} alt="Banner do filme Capitao Fantástico"></img>
          <BoxDescription>
            <SubTitle>Visto Rescentemente</SubTitle>
            <h1>Capitão Fantástico</h1>
            <OverviewCapFantastico>Nas florestas do estado de Washington, um pai cria seus seis filhos longe da civilização, em uma rígida rotina de aventuras. Ele é forçado a deixar o isolamento e leva sua família para encarar o mundo, desafiando sua ideia do que significa ser pai.</OverviewCapFantastico>
          </BoxDescription>
        </BoxInitial>

        <div>
        <Carousel
        {...info}
        renderBottomCenterControls={false}
        defaultControlsConfig={{
          nextButtonText: ' >',
          prevButtonText: ' < ',
          pagingDotsStyle: {
            fill: 'blue',
          },
        }}
      >
        {this.state.filmes.map((item) => (
          <SlideShow>
            <Img src={item.poster} alt="" />
            
            <TitleMovies>{item.title}</TitleMovies>
            <p>{item.overview}</p>
            
          </SlideShow>
        ))}
      </Carousel>
      </div>
      </Body>
    );
  }
}
