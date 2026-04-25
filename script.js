document.addEventListener("DOMContentLoaded", () => {
    const titulo = document.querySelector("h1");

    titulo.addEventListener("click", () => {
        titulo.style.color = "blue";
    });
});

const btn = document.querySelector("#btn");
const titulo = document.querySelector("h1");

let cambiado = false; // estado

btn.addEventListener("click", () => {
    if (cambiado === false) {
        titulo.textContent = "╭∩╮( •̀_•́ )╭∩╮";
        cambiado = true;
    } else {
        titulo.textContent = "Hola, soy Mati 👋";
        cambiado = false;
    }
});


const texto = document.querySelector("#texto");
const toggle = document.querySelector("#toggle");

let visible = false;

toggle.addEventListener("click", () => {
    if (visible === false) {
        texto.style.display = "block";
        toggle.textContent = "Ocultar";
        visible = true;
    } else {
        texto.style.display = "none";
        toggle.textContent = "Mostrar";
        visible = false;
    }
});

const btnSumar = document.querySelector("#sumar");
const btnRestar = document.querySelector("#restar");
const btnReset = document.querySelector("#resetear");

const contadorTexto = document.querySelector("#contador");

let contador = 0;
    

// SUMAR
btnSumar.addEventListener("click", () => {
    contador = contador + 1;
    contadorTexto.textContent = "Clicks: " + contador;
});

// RESTAR
btnRestar.addEventListener("click", () => {
        if (contador > 0) {
        contador--;
        }
        contadorTexto.textContent = "Clicks: " + contador;
});

// RESET
btnReset.addEventListener("click", () => {
    contador = 0;
    contadorTexto.textContent = "Clicks: " + contador;
});

