// Importando Styled components
import styled from "styled-components";

// Estilizando a primeira página
export const LastPageStyled = styled.div`
  /* Container */
  width: 25vw;
  height: auto;

  display: grid;
  grid-template-columns: auto;
  margin: auto;
  margin-top: 3rem;

  padding: 0.5rem;

  background-color: white;

  h1 {
    margin-left: 6rem;
  }

  .informations-div {
    margin-left: 2rem;

    display: flex;
    flex-direction: column;
  }

  .informations-div span {
    font-size: 0.7rem;
    margin-bottom: -1rem;

    color: #8c98a9;
  }

  .street-number-information {
    width: 90%;

    display: flex;
    flex-direction: row;
    gap: 10rem;
  }

  .street-information p {
    margin-top: -0.3rem;
  }

  .number-information p {
    margin-top: -0.3rem;
  }

  .last-page-btn {
    width: 90%;

    margin: auto;
    margin-top: 8rem;
    margin-bottom: 1rem;
  }
`;
