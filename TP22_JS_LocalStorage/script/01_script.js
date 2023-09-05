localStorage.setItem("Test", "Texto de ejmeplo");

document.querySelector("#p1").textContent = localStorage.getItem("Test");

const informacion = {
    nombre: "Pablo",
    apellido: "Deganis",
    mail: "pablodeganis@yahoo.com.ar",
    direccion: "Calle falsa 123",
    telefono: 46421317
};

document.querySelector("#grabar").addEventListener("click", () => { grabar(informacion) });

document.querySelector("#obtener").addEventListener("click", () => { obtener() });

document.querySelector("#grabarJson").addEventListener("click", () => { localStorage.setItem("JSON", JSON.stringify(informacion)) });

document.querySelector("#obtenerJson").addEventListener("click", () => { obtenerJson() });

document.querySelector("#borrar").addEventListener("click", () => {
    localStorage.clear();
    destino1.innerHTML = "";
    destino2.innerHTML = "";
});

const destino1 = document.querySelector("#destino1");
const destino2 = document.querySelector("#destino2");

function grabar(datos) {
    for (dato in datos) {
        localStorage.setItem(dato, datos[dato]);
    }
}

function obtener() {
    destino1.innerHTML = "";
    for (let i = 0; i < localStorage.length; i++) {
        let clave = localStorage.key(i);
        let respuesta = clave + ": " + localStorage.getItem(clave) + "<br>";
        destino1.innerHTML += respuesta;
    }
}

function obtenerJson() {
    let datos = localStorage.getItem("JSON");
    destino2.innerHTML = datos;
}