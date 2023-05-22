let header = document.querySelector("header");

document.querySelector("#headOcultar").addEventListener("click", () => header.style.display = "none");
document.querySelector("#headMostrar").addEventListener("click", () => header.style.display = "block");

let nav = document.querySelector("nav");

document.querySelector("#izquierda").addEventListener("click", () => nav.style.textAlign = "left");
document.querySelector("#centro").addEventListener("click", () => nav.style.textAlign = "center");
document.querySelector("#derecha").addEventListener("click", () => nav.style.textAlign = "right");

let texto = document.querySelector("main p");
let tamFuente = parseInt(texto.style.fontSize);

document.querySelector("#aMas").addEventListener("click", () => {
    tamFuente++;
    texto.style.fontSize = tamFuente + "px";
});

document.querySelector("#aMenos").addEventListener("click", () => {
    tamFuente--;
    texto.style.fontSize = tamFuente + "px";
});

let imagenes = document.querySelectorAll("img");
let botones = document.querySelectorAll("#galeria button");

botones.forEach((boton) => boton.addEventListener("click", () => {
    imagenes[boton.dataset.im].style.filter = boton.dataset.efect;
}));

let colorFondo = document.querySelector("#colorFondo");
colorFondo.addEventListener("change", () => document.body.style.backgroundColor = colorFondo.value);
