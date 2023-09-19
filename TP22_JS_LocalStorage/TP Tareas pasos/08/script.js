let tareas = JSON.parse(localStorage.getItem("Tareas")) || [];

document.querySelector("#agregarTareaBtn").addEventListener("click", agregarTarea)

const inputTarea = document.querySelector("#tareaInput");
function agregarTarea() {
    let ultimoNumero = 0;
    if (tareas.length > 0) {
        ultimoNumero = tareas[tareas.length - 1].id;
    }
    let tarea = {
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
        if (tarea.estado == "Completada") { claseColor = "verde" }
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
        boton.addEventListener("click", (e) => {
            // 3 - Asignamos funcion editar
            tareaEditar(e);
        })
    })

    document.querySelectorAll(".tablaBtnBorrar").forEach((boton) => {
        boton.addEventListener("click", (e) => {
            tareaBorrar(e);
        })
    })
}

asignarEscuchas();

function tareaCambiarEstado(e) {
    let tareaBoton = e.target;
    if (tareaBoton.innerText == "Pendiente") {
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

function tareaBorrar(e) {
    let orden = tareas.findIndex(dato => dato.id == e.target.dataset.id);
    tareas.splice(orden, 1);
    rendertabla();
    asignarEscuchas();
}
// 4 - Crear funcion
function tareaEditar(e) {
    // 4a -- Mostrar pantalla de Edicion
    document.querySelector("#vistaEdicion").style.display = "flex";
}

// 5 - Dar funcion al boton cancelar de pantalla de Edicion
document.querySelector("#edicionCancelar").addEventListener("click", () => {
    document.querySelector("#vistaEdicion").style.display = "none";
})

// 6 NOTA: El contenido es aún estático