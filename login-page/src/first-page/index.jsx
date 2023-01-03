// Função para avançar para próxima página
import { FirstPageVerification } from "./FirstPageVerification";

// Estilização da primeira página
import { FirstPageStyled } from "./style";

// Componente dos icones
import IconsTopSection from "../icons-top-section";



function FirstPage() {
  return (
    <FirstPageStyled>
      <h1>Criação de usuário</h1>

      <IconsTopSection PersonIcon="purple"/>

      <div className="name-input-div">
        <p>Nome</p>
        <input id="name" className="input-form" type="text"></input>
        <span id="span-name" className="span-form">
          O campo não pode estar vazio.
        </span>
      </div>

      <div className="passwords-container">
        <div className="password-input-div">
          <p>Senha</p>
          <input id="password" className="input-form" type="password"></input>
          <span id="span-password" className="span-form">
            O campo não pode estar vazio.
          </span>
        </div>

        <div className="confirm-password-input-div">
          <p>Confirmar senha</p>
          <input
            id="confirm-password"
            className="input-form"
            type="password"
          ></input>
          <span id="confirm-password-span" className="span-form">
            As senhas devem coincindir.
          </span>
        </div>
      </div>

      <div className="email-date-container">
        <div className="email-input-div">
          <p>Email</p>
          <input id="email" className="input-form" type="email"></input>
          <span id="span-email" className="span-form">
            O campo não pode estar vazio.
          </span>
        </div>

        <div className="date-input-div">
          <p>Data de nascimento</p>
          <input id="date" className="input-form" type="date" min="1930-01-02" max="2005-01-02"></input>
          <span id="span-date" className="span-form">
            O campo não pode estar vazio.
          </span>
        </div>
      </div>

      <button className="btn-purple first-page-btn" onClick={FirstPageVerification}>
        Próximo passo
      </button>
    </FirstPageStyled>
  );
}

export default FirstPage;
