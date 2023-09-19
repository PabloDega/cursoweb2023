localStorage.setItem("Test", "Texto de ejemplo");

console.log(localStorage.key(0))

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

document.querySelector("#grabarInput").addEventListener("click", () => { grabarInput() });

document.querySelector("#obtenerInput").addEventListener("click", () => { obtenerInput() });

document.querySelector("#borrarInput").addEventListener("click", () => { borrarInput() });

const destino3 = document.querySelector("#destino3");

function grabarInput() {
    let nacionalidad = document.querySelector("#inputNacionalidad");
    let fecha = document.querySelector("#inputFecha");
    if(nacionalidad.value != "" && fecha.value != ""){
        localStorage.setItem("Nacionalidad", nacionalidad.value);
        localStorage.setItem("Fecha", fecha.value);
        nacionalidad.value = "";
        fecha.value = "";
        destino3.innerHTML = "";
    } else {
        destino3.innerHTML = "Debe compeltar ambos campos"
    }
}

function obtenerInput(){
    let nacionalidad = localStorage.getItem("Nacionalidad");
    let fecha = localStorage.getItem("Fecha");
    if(nacionalidad != null){
    destino3.innerHTML = "Nacionalidad: " + nacionalidad + "<br>Fecha de nacimiento: " + fecha;
    } else {
        destino3.innerHTML = "No se encuentra la informacion solicitada"
    }
}

function borrarInput(){
    localStorage.removeItem("Nacionalidad");
    localStorage.removeItem("Fecha");
    destino3.innerHTML = "";
}