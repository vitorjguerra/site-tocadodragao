

const element = document.getElementById("btnDuvidas")
element.addEventListener("click", trocarMensagem);

function trocarMensagem() {
  document.getElementById("btnDuvidas").innerHTML = "Eu também tenho!";
}
