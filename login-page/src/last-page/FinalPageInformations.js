// Importando informações
import { inputsVerify } from "../first-page/FirstPageVerification";


// Resetando dados e voltando ao inicio
export function CreateANewUser() {
  console.log(localStorage);

  localStorage.removeItem("CEP");
  localStorage.removeItem("Número");
  localStorage.removeItem("Rua");
  localStorage.removeItem("UserEmail");
  localStorage.removeItem("UserName");
  localStorage.removeItem("First Verification");
  localStorage.removeItem("Second Verification");
  localStorage.removeItem("Third Verification");

  inputsVerify.name = false;
  inputsVerify.password = false;
  inputsVerify.secondPassword = false;
  inputsVerify.email = false;
  inputsVerify.date = false;
  inputsVerify.cep = false;
  inputsVerify.street = false;
  inputsVerify.number = false;
  inputsVerify.district = false;
  inputsVerify.city = false;
  inputsVerify.reference = false;
  inputsVerify.about = false;

  window.location.replace("http://localhost:3000/");
}
