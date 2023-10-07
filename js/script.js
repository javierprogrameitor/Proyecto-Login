let form = document.getElementById("login-form");
let inputUser = document.getElementById("user");
let inputPass = document.getElementById("password");
let inputRepitPass = document.getElementById("repitpass");
let inputTelefono = document.getElementById("telefono");
let submitButton = document.getElementById("button");

let nameValid = false;
let passwordValid = false;
let telefonoValid = false;
let regexName = /^[a-zA-Z ]+$/;
let regexPassword = /^[a-zA-Z0-9]{6,}$/;
let regexTelefono = /^\d{9}$/;


const USERNAME_INVALID = "Nombre con sólo letras y espacios";
const PASSWORD_INVALID = "Contraseña con 6 o más carácteres";
const REPITPASS_INVALID = "Repite la contraseña no coincide";
const TLF_INVALID = "Telefono incorrecto";



inputUser.addEventListener("blur", validName);
inputPass.addEventListener("blur", validPassword);
inputRepitPass.addEventListener("blur", validRepitPass);
inputTelefono.addEventListener("blur", validTelefono);

function check() {
    if (nameValid && passwordValid && telefonoValid) {
      submitButton.classList.remove("notAvailable");
    } else {
      submitButton.classList = "notAvailable";
    }
  }

  function validName() {
    nameValid = regexName.test(inputUser.value);
    inputUser.className = nameValid ? "success" : "error";
  
    if (!nameValid) {
      // Obtenemos la etiqueta <small> del div al que pertenece el input
      inputUser.parentNode.getElementsByTagName("small")[0].innerHTML = USERNAME_INVALID;
    } else {
      inputUser.parentNode.getElementsByTagName("small")[0].innerHTML = "";
    }

    check();
}

function validPassword() {
    passwordValid = regexPassword.test(inputPass.value);
    inputPass.className = passwordValid ? "success" : "error";
  
    if (!passwordValid) {
      // Obtenemos la etiqueta <small> del div al que pertenece el input
      inputPass.parentNode.getElementsByTagName("small")[0].innerHTML = PASSWORD_INVALID;
    } else {
        inputPass.parentNode.getElementsByTagName("small")[0].innerHTML = "";
    }

    check();
}

function validRepitPass() {

  let pass = document.getElementById("password").value;
  let rept = document.getElementById("repitpass").value;

  if(pass === rept){
    inputRepitPass.className = "success";

    inputRepitPass.parentNode.getElementsByTagName("small")[0].innerHTML = "";
    } else {
      inputRepitPass.className = "error";
      // Obtenemos la etiqueta <small> del div al que pertenece el input
      inputRepitPass.parentNode.getElementsByTagName("small")[0].innerHTML = REPITPASS_INVALID;
    }
  check();
  }

function validTelefono() {
  telefonoValid = regexTelefono.test(inputTelefono.value);
  inputTelefono.className = telefonoValid ? "success" : "error";

  if (!telefonoValid) {
    // Obtenemos la etiqueta <small> del div al que pertenece el input
    inputTelefono.parentNode.getElementsByTagName("small")[0].innerHTML = TLF_INVALID;
  } else {
      inputTelefono.parentNode.getElementsByTagName("small")[0].innerHTML = "";
  }
  check();
}

form.addEventListener('submit', event => {
  /*
  Para detener el envío del formulario, llamar al método preventDefault() del objeto de evento
  dentro del controlador de eventos de envío de esta manera:
  */
  event.preventDefault();

  /*
  Para enviar el formulario tras validarlo, llamariamos al método submit() del objeto del
  formulario:
  */
  form.submit();

  // Sólo probamos que funciona con un alert()
  alert("Enviado");


});


