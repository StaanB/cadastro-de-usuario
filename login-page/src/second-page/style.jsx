// Importando styled components
import styled from "styled-components";

export const SecondPageStyled = styled.form`
  width: 65vw;
  height: auto;

  display: grid;
  grid-template-columns: auto;
  margin: auto;
  margin-top: 3rem;

  padding: 0.5rem;

  background-color: white;

  h1 {
    margin-top: 2.5rem;
    margin-left: 2.5rem;
  }

  .icon-top-section {
    display: flex;
    align-items: center;

    gap: 4rem;
  }

  .icon-top-section li {
    display: flex;
    align-items: center;

    gap: 1.5rem;
  }

  .icon-top-section svg {
    font-size: 1.7rem;

    color: #8c98a9;
  }

  /* Icones do topo */
  .purple {
    color: #5357b1 !important;
  }

  .green {
    color: #00ae63 !important;
  }
`;
