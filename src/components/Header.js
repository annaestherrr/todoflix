//Libs
import React from "react";
import styled from "styled-components";

//Image
import iconHeader from "../assets/icon-header.svg";
import Lupa from "../assets/icon-lupa.svg";
import Seta from "../assets/setinha-header.svg";
import SetaCategorias from "../assets/setinhaCategorias.svg";

//Styles

const Container = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: black;
  color: white;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;

  @media (max-width: 480px) {
    display: flex;
    justify-content: center;
  }
`;

const ListHeader1 = styled.ul`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  list-style: none;

  @media (max-width: 480px) {
    width: 30%;
    justify-content: center;
  }
`;

const LinkTitle = styled.a`
  font-family: Bebas Neue, Regular;
  font-weight: 600;
  font-size: 1.5rem;
  color: #e71b27;
  margin-right: 1rem;

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-right: 0;
    margin: 0.5rem;
  }
`;

const ButtonCategorias = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  color: white;
  padding-left: 1rem;

  :hover {
    cursor: pointer;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding-left: 0.3rem;
    margin-top: 0.2rem;
  }
`;

const BoxCategorias = styled.ul`
  position: absolute;
  font-size: 0.9rem;
  background-color: #000000;
  list-style: none;
  padding: 1rem;
  padding-top: 0;
  display: flex;
  flex-direction: column;

  li {
    margin-top: 0.5rem;
  }

  :hover {
    cursor: pointer;
  }
`;

const LinkInitial = styled.a`
  color: white;
  text-decoration: none;
  font-size: 0.9rem;

  @media (max-width: 480px) {
    display: none;
  }
`;

const Link = styled.a`
  color: white;
  text-decoration: none;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`;

const ListHeader2 = styled.ul`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  list-style: none;

  @media (max-width: 480px) {
    width: 40%;
  }
`;

const ButtonAdd = styled.button`
  width: 7rem;
  height: 2rem;
  color: white;
  background-color: #e71b27;
  border: transparent;
  border-radius: 0.3rem;

  :hover {
    cursor: pointer;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

const Label = styled.label`
  width: 20rem;
  height: 2rem;
  display: flex;
  align-items: center;
  background-color: #2c2c2c;
  color: white;
  border: transparent;
  border-radius: 0.3rem;
  padding-left: 0.2rem;

  @media (max-width: 480px) {
    height: 1.5rem;
    width: 6rem;
    margin: 0.5rem;
    padding-left: 0;
  }
`;

const Input = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  color: white;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const IconConta = styled.img`
  :hover {
    cursor: pointer;
  }

  @media (max-width: 480px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const ImgSeta = styled.img`
  @media (max-width: 480px) {
    display: none;
  }
`;

export default class Header extends React.Component {
  state = {
    ListCategorias: false,
  };

  handleList = () => {
    this.setState({ ListCategorias: !this.state.ListCategorias });
  };

  render() {
    return (
      <Container>
        <Nav>
          <ListHeader1>
            <LinkTitle
              href="/"
              style={{
                color: "red",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              {" "}
              TODOFLIX
            </LinkTitle>
            <LinkInitial
              href="/"
              style={{
                color: "white",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              Inicio
            </LinkInitial>
            <li>
              <ButtonCategorias onClick={this.handleList}>
                Categorias
                <img src={SetaCategorias} alt=""></img>
              </ButtonCategorias>
              {this.state.ListCategorias && (
                <BoxCategorias>
                  <Link href="/all">Todos</Link>
                  <Link href="/favorites">Favoritos</Link>
                  <li>Ja vistos</li>
                  <li>Adicionados</li>
                </BoxCategorias>
              )}
            </li>
          </ListHeader1>
          <ListHeader2>
            <li>
              <ButtonAdd onClick={this.props.handleModal}>
                Adicionar filme
              </ButtonAdd>
            </li>
            <Label>
              <img src={Lupa}></img>
              <Input
                onChange={this.props.handleFilter}
                type="text"
                placeholder="Pesquisar"
              />
            </Label>
            <div>
              <IconConta src={iconHeader} alt="" />
              <ImgSeta src={Seta} alt="" />
            </div>
          </ListHeader2>
        </Nav>
      </Container>
    );
  }
}
