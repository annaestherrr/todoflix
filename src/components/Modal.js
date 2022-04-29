//Libs
import React from "react";
import styled from "styled-components";
import ReactStars from "react-rating-stars-component";

//Image
import ImgModal from "../assets/Modal.jpg";

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
  z-index: 1;
  background-color: transparent;
`;

const BoxContent = styled.div`
  width: 50%;
  height: 68%;
  display: flex;
  flex-direction: row;
  padding: 2rem;
  border: #808080 solid 1px;
  border-radius: 0.5rem;
  background-color: #000000;
`;

const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  height: 25rem;

  h1 {
    font-size: 1.5rem;
    font-weight: 400;
  }
`;

const BoxButtonClose = styled.div`
  display: flex;
  justify-content: end;
`;

const ButtonClose = styled.button`
  position: absolute;
  right: 23rem;
  outline: none;
  color: white;
  border: transparent;
  background-color: transparent;

  :hover {
    cursor: pointer;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
`;

const TextareaName = styled.textarea`
  height: 2rem;
  width: 23rem;
  color: white;
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
  resize: none;
  border: transparent;
  border-radius: 0.2rem;
  background-color: #2c2c2c;
`;

const TextareaDescription = styled.textarea`
  height: 4.5rem;
  width: 23rem;
  color: white;
  margin-top: 0.3rem;
  margin-bottom: 0.6rem;
  resize: none;
  border: transparent;
  border-radius: 0.2rem;
  background-color: #2c2c2c;
`;

const Status = styled.div`
  display: flex;
  flex-direction: column;
`;

const BoxStatus = styled.div`
  display: flex;
  align-items: center;
`;

const LabelStatus = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Nota = styled.p`
  font-size: 0.8rem;
  margin-bottom: 0;
`;

const ContentImage = styled.div`
  display: flex;
  flex-direction: column;
  width: 40rem;
  height: 15rem;
  padding-left: 1.5rem;
  margin-top: 3rem;
  margin-left: 1.5rem;
`;

const ImgCapa = styled.img`
  width: 15rem;
  height: 8rem;
  border-radius: 0.2rem;
`;

const ButtonSelect = styled.button`
  width: 8rem;
  height: 2rem;
  margin-top: 1rem;
  font-size: 0.8rem;

  :hover {
    cursor: pointer;
  }
`;

const TitleCapa = styled.h3`
  font-size: 0.9rem;
  font-weight: 500;
`;

const ContentButton = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: end;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  right: 25rem;
`;

const ButtonConfirm = styled.button`
  height: 2rem;
  width: 5rem;
  margin-left: 1rem;
  color: white;
  border: transparent;
  border-radius: 0.2rem;
  background-color: #e71b27;

  :hover {
    cursor: pointer;
  }
`;

const ButtonCancel = styled.button`
  height: 2rem;
  width: 5rem;
  color: white;
  border: none;
  background-color: transparent;

  :hover {
    cursor: pointer;
  }
`;

export default class Modal extends React.Component {
  state = {};

  render() {
    return (
      <Container onClick={this.props.handleModal}>
        <BoxContent onClick={(ev) => ev.stopPropagation()}>
          <ContentText>
            <BoxButtonClose>
              <ButtonClose onClick={this.props.handleModal}>X</ButtonClose>
            </BoxButtonClose>
            <h1>Adicionar Filme</h1>
            <Form>
              <Label>
                Nome
                <TextareaName type="text" name="name" />
              </Label>
              <Label>
                Descrição
                <TextareaDescription type="text" name="description" />
              </Label>
              <Status>
                <Label>Status</Label>
                <BoxStatus>
                  <input type="radio" name="status" value="Já assisti" />
                  <LabelStatus>Já assisti</LabelStatus>
                  <input type="radio" name="status" value="Ainda não assisti" />
                  <LabelStatus>Ainda não assisti</LabelStatus>
                </BoxStatus>
              </Status>
            </Form>
            <Nota>Nota</Nota>
            <ReactStars count={5} size={35} activeColor="#ffd700" />
          </ContentText>
          <ContentImage>
            <TitleCapa>Imagem de Capa</TitleCapa>
            <ImgCapa src={ImgModal} alt="" />
            <ButtonSelect>Selecionar Imagem</ButtonSelect>
          </ContentImage>
          <ContentButton>
            <Buttons>
              <ButtonCancel>Cancelar</ButtonCancel>
              <ButtonConfirm>Confirmar</ButtonConfirm>
            </Buttons>
          </ContentButton>
        </BoxContent>
      </Container>
    );
  }
}
