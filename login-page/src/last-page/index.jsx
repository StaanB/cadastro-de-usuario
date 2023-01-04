// Importando as Função de voltar para primeira página
import { CreateANewUser } from "./FinalPageInformations";

// Estilização da última página
import { LastPageStyled } from "./style";

function LastPage() {
  // Pegando dados do LocalStoragee
  const UserName = localStorage.getItem("UserName");
  const UserEmail = localStorage.getItem("UserEmail");
  const street = localStorage.getItem("Rua");
  const number = localStorage.getItem("Número");
  const cep = localStorage.getItem("CEP");

  if (window.localStorage.getItem("Third Verification") === "true") {
    return (
      <LastPageStyled>
        <h1>Usuário criado!</h1>

        <div className="name-information informations-div">
          <span>Nome</span>
          <p id="final-name-p">{UserName}</p>
        </div>

        <div className="email-information informations-div">
          <span>Email</span>
          <p id="final-email-p">{UserEmail}</p>
        </div>

        <div className="street-number-information informations-div">
          <div className="street-information">
            <span>Rua</span>
            <p id="final-street-p">{street}</p>
          </div>

          <div className="number-information">
            <span>Número</span>
            <p id="final-number-p">{number}</p>
          </div>
        </div>

        <div className="cep-information informations-div">
          <span>CEP</span>
          <p id="final-cep-p">{cep}</p>
        </div>

        <button className="btn-purple last-page-btn" onClick={CreateANewUser}>
          Novo Usuário
        </button>
      </LastPageStyled>
    );
  } else {
    window.location.replace("http://localhost:3000/");
  }
}

export default LastPage;
