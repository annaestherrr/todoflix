//Libs
import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

//Components
import Home from "./components/Home";
import All from "./components/All";
import Modal from "./components/Modal";
import Header from "./components/Header";
import Favorites from "./components/Favorites";

//Styles
const GlobalStyle = createGlobalStyle` 
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
  }
`;

export default class App extends React.Component {
  state = {
    isModal: false,
    filterValue: "",
    movies: [
      {
        id: 0,
        poster: 'https://istoe.com.br/wp-content/uploads/sites/14/2020/01/minha-mae-e-uma-peca-3.jpg',
        title: "Minha Mãe é Uma Peça",
        overview:
          "Dona Hermínia é uma mulher de meia idade, aposentada e não tem muitas ocupações. Ela é uma mãe dedicada e está sempre preocupada com os filhos, só que eles cresceram, e já não precisam tanto dela. Sem um trabalho, um companheiro ou filhos pequenos para se ocupar, Dona Hermínia passa o dia todo desabafando sobre seus problemas com a tia idosa, a vizinha fofoqueira e a amiga confidente..",
        favorite: true,
        nota: 5,
      },
      {
        id: 1,
        poster:
          "https://observatoriodocinema.uol.com.br/wp-content/uploads/2018/12/minha-vida-em-marte.jpg",
        title: "Minha Vida em Marte",
        overview:
          "Fernanda é casada e o casal está em meio ao desgaste pelo convívio de anos. Quem ajuda Fernanda a superar a crise é seu sócio Aníbal, parceiro inseparável na árdua jornada de salvar o casamento ou pôr um fim nele.",
        favorite: true,
        nota: 5,
      },

      {
        id: 2,
        poster:
          "https://noticiasdatv.uol.com.br/media/_versions/artigos/shawn-wayans-marlon-wayans-as-branquelas-reproducao-sony-pictures-min_fixed_large.jpg",
        title: "As Branquelas",
        overview:
          "Duas jovens socialites, sofrem uma ameaça de sequestro. Para garantir a segurança das irmãs Wilson os agentes Kevin e Marcus são designados para escoltá-las.",
        favorite: false,
        nota: 5,
      },
      {
        id: 3,
        poster:
          "https://cinemacao.com/wp-content/uploads/2021/01/ponte-para-terabitia1-scaled.jpg",
        title: "Ponte para Terabítia",
        overview:
          "Durante o verão Jess treinou para ser o garoto mais rápido da escola, e seus planos são ameaçados por Leslie, que vence uma corrida que deveria ser apenas para garotos.",
        favorite: true,
        nota: 3,
      },
      {
        id: 4,
        poster: "https://i.ytimg.com/vi/q7vk_FS55KQ/maxresdefault.jpg",
        title: "Detona Ralph",
        overview:
          "Cansado de ser desprezado no seu jogo de fliperama, Ralph tem um plano para ganhar a atenção do herói Felix e dos outros personagens.",
        favorite: true,
        nota: 5,
      },
      {
        id: 5,
        poster:
          "https://www.planocritico.com/wp-content/uploads/2021/04/critica_shrek.jpg",
        title: "Shrek",
        overview:
          "Para resgatar uma princesa das garras de um dragão que cospe fogo, o ogro Shrek se une a um companheiro improvável: um burro brincalhão.",
        favorite: true,
        nota: 4,
      },
      {
        id: 6,
        poster:
          "https://blog.explorersclub.com.br/wp-content/uploads/2021/06/homem-aranha-3-spider-man-no-way-home.jpg",
        title: "Spider-man",
        overview:
          "Após ser picado por uma aranha radioativa, o garoto Miles Morales logo aprende a lançar teias com seus parceiros de um universo alternativo.",
        favorite: true,
        nota: 2,
      },
      {
        id: 7,
        poster:
          "https://onlineseries.com.br/wp-content/uploads/2021/12/To-Ryca-2-estreia.jpg",
        title: "Tô Rica",
        overview:
          "Selminha é uma frentista que recebe uma herança de família, mas somente se cumprir o desafio de gastar 30 milhões de reais em 30 dias. No entanto, ela descobre que tem coisas que o dinheiro não compra.",
        favorite: true,
        nota: 3,
      },
      {
        id: 8,
        poster:
          "https://entretetizei.com.br/site/wp-content/uploads/2020/11/enrolados.jpg",
        title: "Enrolados",
        overview:
          "O bandido, Flynn Rider, se esconde em uma torre e acaba prisioneiro de Rapunzel. Ela está trancada há anos e deseja a liberdade, faz um acordo com o rapaz e partem para uma aventura emocionante.",
        favorite: false,
        nota: 5,
      },
    ],
  };

  handleModal = () => {
    this.setState({ isModal: !this.state.isModal });
  };

  handleFavorite = (id) => {
    const list = this.state.movies.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          favorite: !item.favorite,
        };
      }
      return item;
    });
    this.setState({
      movies: list,
    });
  };

  handleChangeFilter = (ev) => {
    const { value } = ev.target;
    console.log(value);
    this.setState({
      filterValue: value,
    });
  };

  render() {
    const { filterValue } = this.state;
    const list = this.state.movies.filter((item) =>
      item.title.toLowerCase().includes(filterValue.toLowerCase())
    );

    const listFavorite = list.filter((item) => item.favorite)

    return (
      <Router>
        <Header
          handleModal={this.handleModal}
          handleFilter={this.handleChangeFilter}
          filterValue={this.state.filterValue}
        />
        {this.state.isModal && <Modal handleModal={this.handleModal} />}
        <Routes>
          <Route
            path="/"
            element={
              <Home handleFavorite={this.handleFavorite} list={list} />
            }
          />
          <Route
            path="/all"
            element={<All handleFavorite={this.handleFavorite} list={list} />}
          />
          <Route
            path="/favorites"
            element={<Favorites handleFavorite={this.handleFavorite} list={listFavorite} />}
          />
        </Routes>
      </Router>
    );
  }
}
