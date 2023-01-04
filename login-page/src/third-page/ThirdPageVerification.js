import { inputsVerify } from "../first-page/FirstPageVerification";

export function ThirdPageVerification(e) {
  e.preventDefault();

  checkThirdPageInputs();
  if (
    inputsVerify.about === true
  ) {
    window.localStorage.setItem("Third Verification", "true");
    window.location.replace("http://localhost:3000/LastPage");
  }
}

function checkThirdPageInputs() {
  // Checando campo sobre você
  const about = document.getElementById("about");
  const spanAbout = document.getElementById("span-about");

  if (about.value.trim() === "") {
    about.classList.remove("input-okay");
    about.classList.add("input-error");
    spanAbout.classList.add("visible");
    inputsVerify.about = false;
  } else if (about.value.length < 20) {
    about.classList.remove("input-okay");
    about.classList.add("input-error");
    spanAbout.innerText = "As informações sobre você precisam ter mais de 20 caracteres.";
    spanAbout.classList.add("visible");
    inputsVerify.about = false;
  } else {
    about.classList.remove("input-error");
    about.classList.add("input-okay");
    spanAbout.classList.remove("visible");
    inputsVerify.about = true;
  }
}

export function BackSecondPage() {
  window.localStorage.removeItem("Second Verification");
  window.location.replace("http://localhost:3000/SecondPage");
}
