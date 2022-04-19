//Libs
import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

//Components
import Inicio from "./components/Inicio";

//Image
import iconHeader from "./assets/icon-header.svg"
import Lupa from "./assets/icon-lupa.svg"
import Seta from "./assets/setinha-header.svg"

//Styles
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle` 
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
  }
`;

const Header = styled.div`
  background-color: black;
  color: white;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const ListHeader1 = styled.ul`
  list-style: none;
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: red solid;
`;

const Title = styled.h1`
  font-family: Bebas Neue, Regular;
  font-weight: 600;
  font-size: 1.5rem;
  color: #E71B27;
`;

const ListHeader2 = styled.ul`
  list-style: none;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: red solid;
`;

const ButtonHeader = styled.button`
  width: 112px;
  height: 32px;
  color: white;
  background-color: #E71B27;
  border: transparent;
  border-radius: 3px;

  :hover{
    cursor: pointer;
  }
`;

const InputHeader = styled.input`
  width: 400px;
  height: 32px;
  color: white;
  background-color: #2C2C2C;
  border: transparent;
  border-radius: 3px;
`;

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Header>
          <Nav>
            <ListHeader1>
              <li>
                <Title>TODOFLIX</Title>
              </li>
              <Link
                  to="/"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                >
                  Inicio
                </Link>
              <li>Categorias</li>
            </ListHeader1>
            <ListHeader2>
              <li>
                <ButtonHeader>Adicionar filme</ButtonHeader>
              </li>
              <label>
                <InputHeader type="text" placeholder="Pesquisar"></InputHeader>
                <img src={Lupa}></img>
              </label>
              <li>
                <img src={iconHeader} alt=""></img>
                <img src={Seta} alt=""></img>
              </li>
            </ListHeader2>
          </Nav>
        </Header>

        <Routes>
           <Route path="/" element={<Inicio/>} />
        </Routes>
      </Router>
    );
  }
}

