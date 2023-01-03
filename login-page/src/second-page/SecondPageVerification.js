import { inputsVerify } from "../first-page/FirstPageVerification";

export function SecondPageVerification(e) {
  e.preventDefault();

  checkSecondPageInputs();
  if (
    inputsVerify.cep &&
    inputsVerify.street &&
    inputsVerify.number &&
    inputsVerify.district &&
    inputsVerify.city &&
    inputsVerify.reference === true
  ) {
    window.localStorage.setItem("Second Verification", "true");
    window.location.replace("http://localhost:3000/ThirdPage");
  }
}

function checkSecondPageInputs() {
  const cep = document.getElementById("cep");
  const spanCep = document.getElementById("span-cep");

  //   Checando campo CEP
  if (cep.value.trim() === "") {
    cep.classList.remove("input-okay");
    cep.classList.add("input-error");
    spanCep.classList.add("visible");
    inputsVerify.cep = false;
  } else if (cep.value.length < 9) {
    cep.classList.remove("input-okay");
    cep.classList.add("input-error");
    spanCep.innerText = "Formato de CEP inválido.";
    spanCep.classList.add("visible");
    inputsVerify.cep = false;
  } else if (cep.value.length > 9) {
    cep.classList.remove("input-okay");
    cep.classList.add("input-error");
    spanCep.innerText = "Formato de CEP inválido.";
    spanCep.classList.add("visible");
    inputsVerify.cep = false;
  } else if (!cep.value.trim().includes("-")) {
    cep.classList.remove("input-okay");
    cep.classList.add("input-error");
    spanCep.innerText = "Formato de CEP inválido.";
    spanCep.classList.add("visible");
    inputsVerify.cep = false;
  } else {
    cep.classList.remove("input-error");
    cep.classList.add("input-okay");
    spanCep.classList.remove("visible");
    inputsVerify.cep = true;
    window.localStorage.setItem("CEP", cep.value.trim());
  }

  // Checando campo rua
  const street = document.getElementById("street");
  const spanStreet = document.getElementById("span-street");

  if (street.value.trim() === "") {
    street.classList.remove("input-okay");
    street.classList.add("input-error");
    spanStreet.classList.add("visible");
    inputsVerify.street = false;
  } else {
    street.classList.remove("input-error");
    street.classList.add("input-okay");
    spanStreet.classList.remove("visible");
    inputsVerify.street = true;
    window.localStorage.setItem("Rua", street.value.trim());
  }

  // Checando campo número
  const number = document.getElementById("number");
  const spanNumber = document.getElementById("span-number");

  if (number.value.trim() === "") {
    number.classList.remove("input-okay");
    number.classList.add("input-error");
    spanNumber.classList.add("visible");
    inputsVerify.number = false;
  } else {
    number.classList.remove("input-error");
    number.classList.add("input-okay");
    spanNumber.classList.remove("visible");
    inputsVerify.number = true;
    window.localStorage.setItem("Número", number.value.trim());
  }

  // Checando campo Bairro
  const district = document.getElementById("district");
  const spanDistrict = document.getElementById("span-district");

  if (district.value.trim() === "") {
    district.classList.remove("input-okay");
    district.classList.add("input-error");
    spanDistrict.classList.add("visible");
    inputsVerify.district = false;
  } else {
    district.classList.remove("input-error");
    district.classList.add("input-okay");
    spanDistrict.classList.remove("visible");
    inputsVerify.district = true;
  }

  // Checando campo cidade
  const city = document.getElementById("city");
  const spanCity = document.getElementById("span-city");

  if (city.value.trim() === "") {
    city.classList.remove("input-okay");
    city.classList.add("input-error");
    spanCity.classList.add("visible");
    inputsVerify.city = false;
  } else {
    city.classList.remove("input-error");
    city.classList.add("input-okay");
    spanCity.classList.remove("visible");
    inputsVerify.city = true;
  }

  // Checando campo referência
  const reference = document.getElementById("reference");
  const spanReference = document.getElementById("span-reference");

  if (reference.value.trim() === "") {
    reference.classList.remove("input-okay");
    reference.classList.add("input-error");
    spanReference.classList.add("visible");
    inputsVerify.reference = false;
  } else {
    reference.classList.remove("input-error");
    reference.classList.add("input-okay");
    spanReference.classList.remove("visible");
    inputsVerify.reference = true;
  }
}

export function BackFirstPage() {
  window.localStorage.removeItem("First Verification");
  window.location.replace("http://localhost:3000/");
}
