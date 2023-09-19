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
function tareaEditar(e) {
    // 1 - Agregar carga dinamica de contenido al cuadro Edicion
    let orden = tareas.findIndex(dato => dato.id == e.target.dataset.id);
    let datos = tareas[orden];
    // console.log(datos);
    // 1b - Insertar datos en elementos
    document.querySelector("#edicionId").innerText = "Tarea Nº " + datos.id;
    document.querySelector("#edicionTarea").value = datos.tarea;

    if(datos.estado == "Pendiente"){
        document.querySelector("#edicionOpcionPend").setAttribute("selected", "");
        document.querySelector("#edicionOpcionComp").removeAttribute("selected", "");
    }
    if(datos.estado == "Completada"){
        document.querySelector("#edicionOpcionComp").setAttribute("selected", "");
        document.querySelector("#edicionOpcionPend").removeAttribute("selected", "");
    }
    // 1c - Insertar orden de aray del elemento como dataset en el boton Aplicar
    document.querySelector("#edicionAplicar").setAttribute("data-id", orden)

    document.querySelector("#vistaEdicion").style.display = "flex";
}

document.querySelector("#edicionCancelar").addEventListener("click", () => {
    document.querySelector("#vistaEdicion").style.display = "none";
})

// 2 - Asignar evento Aplicar de Edicion
document.querySelector("#edicionAplicar").addEventListener("click", (e) => {
    // 2a - Leer datos de los objetos
    let tareaEditada = document.querySelector("#edicionTarea").value;
    let estadoEditado = document.querySelector("#edicionEstado").value;
    let orden = e.target.dataset.id
    // console.log(orden, tareaEditada, estadoEditado);
    // 2b Cerrar cuadro de edicion
    document.querySelector("#vistaEdicion").style.display = "none";
    // 2c - Actualizar datos del Objeto
    tareas[orden].tarea = tareaEditada;
    tareas[orden].estado = estadoEditado;
    // 2d - Actualizar vista
    rendertabla();
    asignarEscuchas();
})