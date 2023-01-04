// Verificando se os inputs estão corretos
export const inputsVerify = {
  name: false,
  password: false,
  secondPassword: false,
  email: false,
  date: false,
  cep: false,
  street: false,
  number: false,
  district: false,
  city: false,
  reference: false,
  about: false,
};

// Verificação da primeira página
export function FirstPageVerification(e) {
  e.preventDefault();

  checkFirstPageInputs();
  if (
    inputsVerify.name &&
    inputsVerify.password &&
    inputsVerify.secondPassword &&
    inputsVerify.email &&
    inputsVerify.date === true
  ) {
    window.localStorage.setItem("First Verification", "true");
    window.location.replace("http://localhost:3000/SecondPage");
  }
}
// Função para verificar os inputs vazios ou inválidos
function checkFirstPageInputs() {
  // Checando campo nome
  const name = document.getElementById("name");
  const spanName = document.getElementById("span-name");

  if (name.value.trim() === "") {
    name.classList.remove("input-okay");
    name.classList.add("input-error");
    spanName.classList.add("visible");
    inputsVerify.name = false;
  } else {
    name.classList.remove("input-error");
    name.classList.add("input-okay");
    spanName.classList.remove("visible");
    inputsVerify.name = true;
    window.localStorage.setItem("UserName", name.value.trim());
  }
  // Checando campo senha
  const password = document.getElementById("password");
  const spanPassword = document.getElementById("span-password");

  if (password.value.trim() === "") {
    spanPassword.innerText = "O campo não pode estar vazio.";
    password.classList.remove("input-okay");
    password.classList.add("input-error");
    spanPassword.classList.add("visible");
    inputsVerify.password = false;
  } else if (password.value.length < 8) {
    password.classList.remove("input-okay");
    password.classList.add("input-error");
    spanPassword.innerText = "A senha deve conter mais de 8 caracteres";
    spanPassword.classList.add("visible");
    inputsVerify.password = false;
  } else {
    password.classList.remove("input-error");
    password.classList.add("input-okay");
    spanPassword.classList.remove("visible");
    inputsVerify.password = true;
  }

  //Checando o campo confirmar senha
  const confirmPassword = document.getElementById("confirm-password");
  const confirmPasswordSpan = document.getElementById("confirm-password-span");

  if (confirmPassword.value.trim() === "") {
    confirmPasswordSpan.innerText = "O campo não pode estar vazio.";
    confirmPassword.classList.remove("input-okay");
    confirmPassword.classList.add("input-error");
    confirmPasswordSpan.classList.add("visible");
    inputsVerify.secondPassword = false;
  } else if (confirmPassword.value.trim() !== password.value.trim()) {
    confirmPassword.classList.remove("input-okay");
    confirmPassword.classList.add("input-error");
    confirmPasswordSpan.innerText = "As senhas devem coincindir!";
    confirmPasswordSpan.classList.add("visible");
    inputsVerify.secondPassword = false;
  } else {
    confirmPassword.classList.remove("input-error");
    confirmPassword.classList.add("input-okay");
    confirmPasswordSpan.classList.remove("visible");
    inputsVerify.secondPassword = true;
  }

  // Checando campo email
  const email = document.getElementById("email");
  const spanEmail = document.getElementById("span-email");

  if (email.value.trim() === "") {
    spanEmail.innerText = "O campo não pode estar vazio.";
    email.classList.remove("input-okay");
    email.classList.add("input-error");
    spanEmail.classList.add("visible");
    inputsVerify.email = false;
  } else if (!email.value.trim().includes("@")) {
    email.classList.remove("input-okay");
    email.classList.add("input-error");
    spanEmail.innerText = "Esse formato de email não é válido";
    spanEmail.classList.add("visible");
    inputsVerify.email = false;
  } else if (!email.value.trim().includes(".")) {
    email.classList.remove("input-okay");
    email.classList.add("input-error");
    spanEmail.innerText = "Esse formato de email não é válido";
    spanEmail.classList.add("visible");
    inputsVerify.email = false;
  } else {
    email.classList.remove("input-error");
    email.classList.add("input-okay");
    spanEmail.classList.remove("visible");
    inputsVerify.email = true;
    window.localStorage.setItem("UserEmail", email.value.trim());
  }

  // Checando campo data
  const date = document.getElementById("date");
  const spanDate = document.getElementById("span-date");

  if (date.value.trim() === "") {
    date.classList.remove("input-okay");
    date.classList.add("input-error");
    spanDate.classList.add("visible");
    inputsVerify.date = false;
  } else {
    date.classList.remove("input-error");
    date.classList.add("input-okay");
    spanDate.classList.remove("visible");
    inputsVerify.date = true;
  }
}
