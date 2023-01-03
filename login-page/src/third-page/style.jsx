// Importando styled components
import styled from "styled-components";

export const ThirdPageStyled = styled.form`
  width: 55vw;
  height: auto;

  display: grid;
  grid-template-columns: auto;
  margin: auto;
  margin-top: 3rem;

  padding: 0.5rem;

  background-color: white;

  .about-input-div {
    width: 90%;
    height: 90%;

    display: flex;
    flex-direction: column;

    margin-left: 2.5rem;
  }

  #about{
    width: 100%;
    height: 14rem;
    text-align: left;
    resize: none;
  }

`;
