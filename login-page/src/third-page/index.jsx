// Função para avançar para próxima página
import { ThirdPageVerification, BackSecondPage } from "./ThirdPageVerification";

// Estilização da primeira página
import { ThirdPageStyled } from "./style";

// Componente dos icones
import IconsTopSection from "../icons-top-section";

function ThirdPage() {
  if (window.localStorage.getItem("Second Verification") === "true") {
    return (
      <ThirdPageStyled>
        <h1>Criação de usuário</h1>

        <IconsTopSection
          PersonIcon="green"
          HomeIcon="green"
          DocumentIcon="purple"
        />

        <div className="about-input-div">
          <p>Nos conte mais sobre você</p>
          <textarea id="about" className="input-form" type="text"></textarea>
          <span id="span-reference" className="span-form">
            O campo não pode estar vazio.
          </span>
        </div>

        <div className="btns-div">
          <button className="btn-gray" onClick={BackSecondPage}>
            Anterior
          </button>
          <button className="btn-purple" onClick={ThirdPageVerification}>
            Próximo passo
          </button>
        </div>
      </ThirdPageStyled>
    );
  } else if (window.localStorage.getItem("First Verification") === "true") {
    window.location.replace("http://localhost:3000/SecondPage");
  } else {
    window.location.replace("http://localhost:3000/");
  }
}

export default ThirdPage;
