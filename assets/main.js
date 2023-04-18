

const element = document.getElementById("btnDuvidas")
element.addEventListener("click", trocarMensagem);

function trocarMensagem() {
  document.getElementById("btnDuvidas").innerHTML = "Eu também tenho!";
}


function irParaOutraPagina() {
  window.location.href = 'builds-pve.html';
}


const elemento = document.getElementById('listaDeClasses');
const lista = document.getElementByClassName('minha-lista');

elemento.addEventListener('mouseover', mostrarListaDeBuilds);

function mostrarListaDeBuilds() {
  lista.style.display = lista.style.display === 'none' ? 'block' : 'none';
}