// Função para avançar para próxima página ou voltar para primeira
import {
  SecondPageVerification,
  BackFirstPage,
} from "./SecondPageVerification";

// Estilização da segunda página
import { SecondPageStyled } from "./style";

// Componente dos icones
import IconsTopSection from "../icons-top-section";

function SecondPage() {
  if (window.localStorage.getItem("First Verification") === "true") {
    return (
      <SecondPageStyled>
        <h1>Criação de usuário</h1>

        <IconsTopSection PersonIcon="green" HomeIcon="purple" />

        <div className="cep-street-container">
          <div className="cep-input-div">
            <p>CEP</p>
            <input id="cep" className="input-form" type="text"></input>
            <span id="span-cep" className="span-form">
              O campo não pode estar vazio.
            </span>
          </div>

          <div className="street-input-div">
            <p>Rua</p>
            <input id="street" className="input-form" type="text"></input>
            <span id="span-street" className="span-form">
              O campo não pode estar vazio.
            </span>
          </div>
        </div>

        <div className="number-district-city-container">
          <div className="number-input-div">
            <p>Número</p>
            <input id="number" className="input-form" type="number"></input>
            <span id="span-number" className="span-form">
              O campo não pode estar vazio.
            </span>
          </div>

          <div className="district-input-div">
            <p>Bairro</p>
            <input id="district" className="input-form" type="text"></input>
            <span id="span-district" className="span-form">
              O campo não pode estar vazio.
            </span>
          </div>

          <div className="city-input-div">
            <p>Cidade</p>
            <input id="city" className="input-form" type="text"></input>
            <span id="span-city" className="span-form">
              O campo não pode estar vazio.
            </span>
          </div>
        </div>

        <div className="reference-input-div">
          <p>Ponto de referência</p>
          <input id="reference" className="input-form" type="text"></input>
          <span id="span-reference" className="span-form">
            O campo não pode estar vazio.
          </span>
        </div>

        <div className="btns-div">
          <button className="btn-gray" onClick={BackFirstPage}>
            Anterior
          </button>
          <button className="btn-purple" onClick={SecondPageVerification}>
            Próximo passo
          </button>
        </div>
      </SecondPageStyled>
    );
  } else {
    window.location.replace("http://localhost:3000/");
  }
}

export default SecondPage;
