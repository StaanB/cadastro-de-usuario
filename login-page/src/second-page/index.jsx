// Função para avançar para próxima página

// Estilização da primeira página
import { SecondPageStyled } from "./style";

// Componente dos icones
import IconsTopSection from "../icons-top-section";


function SecondPage() {
  if (window.localStorage.getItem("First Verification") === "true") {
    return (
      <SecondPageStyled>
        <h1>Criação de usuário</h1>
        <IconsTopSection PersonIcon="green" HomeIcon="purple"/>

        
      </SecondPageStyled>
    );
  } else {
    window.location.replace("http://localhost:3000/");
  }
}

export default SecondPage;
