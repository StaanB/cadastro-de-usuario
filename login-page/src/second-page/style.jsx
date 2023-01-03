// Importando styled components
import styled from "styled-components";

export const SecondPageStyled = styled.form`
  width: 55vw;
  height: auto;

  display: grid;
  grid-template-columns: auto;
  margin: auto;
  margin-top: 3rem;

  padding: 0.5rem;

  background-color: white;

  .cep-street-container {
    display: flex;
    width: 90%;

    gap: 4rem;
    margin-left: 2.5rem;
    margin-top: 1rem;
  }

  .cep-input-div {
    display: flex;
    flex-direction: column;
    width: 50%;
  }

  .street-input-div {
    display: flex;
    flex-direction: column;
    width: 50%;
  }

   #cep #street{
    width: 100%;
  }

  .number-district-city-container {
    display: flex;
    width: 90%;

    gap: 4rem;
    margin-left: 2.5rem;
    margin-top: 1rem;
  }

  .number-input-div {
    display: flex;
    flex-direction: column;
    width: 22%;
  }

  .district-input-div {
    display: flex;
    flex-direction: column;
    width: 22%;
  }

  .city-input-div {
    display: flex;
    flex-direction: column;
    width: 50%;
  }

  .reference-input-div {
    width: 90%;

    display: flex;
    flex-direction: column;

    margin-left: 2.5rem;
  }
`;
