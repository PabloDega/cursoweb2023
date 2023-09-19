let tareas = JSON.parse(localStorage.getItem("Tareas")) || [];

document.querySelector("#agregarTareaBtn").addEventListener("click", agregarTarea)

const inputTarea = document.querySelector("#tareaInput");
// 3 - Modificamos la logica en la asginacion de numero de tarea
/* 3a --> 
console.log(tareas.length);
console.log(tareas[tareas.length]);
console.log(tareas[tareas.length - 1]).id; */
console.log(tareas.length);
function agregarTarea() {
    // 3b - Verifico si al array esta vacio, si no lo está encuentro el ultimo numero de id
    let ultimoNumero = 0;
    if(tareas.length > 0){
        ultimoNumero = tareas[tareas.length - 1].id;
    }
    let tarea = {
        // 3c - reasginamos el numero
        id: ultimoNumero + 1,
        tarea: inputTarea.value,
        estado: "Pendiente",
    }
    tareas.push(tarea);
    localStorage.setItem("Tareas", JSON.stringify(tareas));
    inputTarea.value = "";
    rendertabla();
    asignarEscuchas();
}

const tableBody = document.querySelector("#tareasTabla tbody");

function rendertabla() {
    tableBody.innerHTML = "";
    tareas.forEach((tarea) => {
        let claseColor = "naranja"
        if(tarea.estado == "Completada"){claseColor = "verde"}
        let fila = `<tr>
                    <td>${tarea.id}</td>
                    <td>${tarea.tarea}</td>
                    <td>
                        <span class="btn ${claseColor} tablaBtnEstado" data-id="${tarea.id}">
                            ${tarea.estado}
                        </span>
                    </td>
                    <td>
                        <span class="btn azul tablaBtnEditar" data-id="${tarea.id}">Editar</span>
                        <span class="btn azul tablaBtnBorrar" data-id="${tarea.id}">Borrar</span>
                    </td>
                </tr>`;
        tableBody.innerHTML += fila;
    })
}

rendertabla();

function asignarEscuchas() {
    document.querySelectorAll(".tablaBtnEstado").forEach((boton) => {
        boton.addEventListener("click", (e) => {
            tareaCambiarEstado(e);
        })
    })

    document.querySelectorAll(".tablaBtnEditar").forEach((boton) => {
        boton.addEventListener("click", () => {
            console.log("Test boton Editar")
        })
    })

    document.querySelectorAll(".tablaBtnBorrar").forEach((boton) => {
        boton.addEventListener("click", (e) => {
            // 1 - Agragamos funcion de borrado
            tareaBorrar(e);
        })
    })
}

asignarEscuchas();

function tareaCambiarEstado(e){
    let tareaBoton = e.target;
    if(tareaBoton.innerText == "Pendiente"){
        tareaBoton.classList.remove("naranja");
        tareaBoton.classList.add("verde");
        tareaBoton.innerText = "Completada";
        let orden = tareas.findIndex(dato => dato.id == e.target.dataset.id);
        tareas[orden].estado = "Completada";
    } else {
        tareaBoton.classList.remove("verde");
        tareaBoton.classList.add("naranja");
        tareaBoton.innerText = "Pendiente";
        let orden = tareas.findIndex(dato => dato.id == e.target.dataset.id);
        tareas[orden].estado = "Pendiente";
    }
    localStorage.setItem("Tareas", JSON.stringify(tareas));
    rendertabla();
    asignarEscuchas();
}
// 2 - Creamos la funcion
function tareaBorrar(e){
    //--- Eliminamos dato del array en localStorage y recargamos los datos
    // console.log(e)
    // console.log(e.target.dataset.id)
    let resultado = tareas.findIndex(dato => dato.id == e.target.dataset.id)
    // console.log(tareas[resultado])
    tareas.splice(resultado, 1);
    localStorage.setItem("Tareas", JSON.stringify(tareas));
    rendertabla();
    asignarEscuchas();
    //--- ver que ahora se repiten los numeros de id porque se basan en el oden sobre el array
}