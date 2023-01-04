// Importando Styled components
import styled from "styled-components";

// Estilizando a primeira página
export const FirstPageStyled = styled.form`
  /* Container */
  width: 55vw;
  height: auto;

  display: grid;
  grid-template-columns: auto;
  margin: auto;
  margin-top: 3rem;

  padding: 0.5rem;

  background-color: white;

  .name-input-div {
    width: 90%;

    display: flex;
    flex-direction: column;

    margin-left: 2.5rem;
  }

  .passwords-container {
    display: flex;
    width: 90%;

    gap: 4rem;
    margin-left: 2.5rem;
    margin-top: 1rem;
  }

  .password-input-div {
    display: flex;
    flex-direction: column;
    width: 50%;
  }
  .confirm-password-input-div {
    display: flex;
    flex-direction: column;
    width: 50%;
  }

  #pasword #confirm-password #email #date {
    width: 100%;
  }

  .email-date-container {
    display: flex;
    width: 90%;

    gap: 4rem;
    margin-left: 2.5rem;
    margin-top: 1rem;
  }

  .email-input-div {
    display: flex;
    flex-direction: column;
    width: 50%;
  }
  .date-input-div {
    display: flex;
    flex-direction: column;
    width: 50%;
  }

  .first-page-btn {
    margin-left: 80%;
    margin-top: 9rem;
  }
`;
