let form = document.getElementById("login-form");
let inputUser = document.getElementById("user");
let inputPass = document.getElementById("password");
let inputRepitPass = document.getElementById("repitpass");
let inputEmail = document.getElementById("email");
let submitButton = document.getElementById("button");

let nameValid = false;
let passwordValid = false;
let repitValid = false;
let emailValid = false;
let regexName = /^[a-zA-Z ]+$/;
let regexPassword = /^[a-zA-Z0-9]{6,}$/;
let regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const USERNAME_INVALID = "Nombre con sólo letras y espacios";
const PASSWORD_INVALID = "Contraseña con 6 o más carácteres";
const REPITPASS_INVALID = "Repite la contraseña no coincide";
const EMAIL_INVALID = "Email incorrecto";



inputUser.addEventListener("blur", validName);
inputPass.addEventListener("blur", validPassword);
inputRepitPass.addEventListener("blur", validRepitPass);
inputEmail.addEventListener("blur", validEmail);

function check() {
    if (nameValid && passwordValid && repitValid && emailValid ) {
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

  if(inputRepitPass == inputPass){

    if(!repitValid){
      // Obtenemos la etiqueta <small> del div al que pertenece el input
      inputRepitPass.parentNode.getElementsByTagName("small")[0].innerHTML = REPITPASS_INVALID;
    } else {
      inputRepitPass.parentNode.getElementsByTagName("small")[0].innerHTML = "";
    }

    check();
  }

  

}

function validEmail() {
    emailValid = regexEmail.test(inputEmail.value);
    inputEmail.className = emailValid ? "success" : "error";
  
    if (!emailValid) {
      // Obtenemos la etiqueta <small> del div al que pertenece el input
      inputEmail.parentNode.getElementsByTagName("small")[0].innerHTML = EMAIL_INVALID;
    } else {
        inputEmail.parentNode.getElementsByTagName("small")[0].innerHTML = "";
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


