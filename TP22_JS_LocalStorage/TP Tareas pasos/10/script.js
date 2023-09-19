let tareas = JSON.parse(localStorage.getItem("Tareas")) || [];

document.querySelector("#agregarTareaBtn").addEventListener("click", agregarTarea)

const inputTarea = document.querySelector("#tareaInput");
function agregarTarea() {
    // 1a - Validar input (--> 1b en html)
    if(inputTarea.value == ""){
        // 1c - Insertar emnsaje de error (--> 1d en CSS)
        document.querySelector("#inputError").innerText = "Nombrar tarea en el cuadro de texto";
        return;
    }
    // 1e - restaurar inputError
    document.querySelector("#inputError").innerText = "";
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
    localStorage.setItem("Tareas", JSON.stringify(tareas));
    rendertabla();
    asignarEscuchas();
}
function tareaEditar(e) {
    let orden = tareas.findIndex(dato => dato.id == e.target.dataset.id);
    let datos = tareas[orden];
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
    document.querySelector("#edicionAplicar").setAttribute("data-id", orden)

    document.querySelector("#vistaEdicion").style.display = "flex";
}

document.querySelector("#edicionCancelar").addEventListener("click", () => {
    document.querySelector("#vistaEdicion").style.display = "none";
})

document.querySelector("#edicionAplicar").addEventListener("click", (e) => {
    let tareaEditada = document.querySelector("#edicionTarea").value;
    // 2a - Validar Input en cuadro de edición (--> 2b en html)
    if(tareaEditada == ""){
        // 2c - Insertar texto de error (--> 2d en CSS)
        document.querySelector("#edicionError").innerHTML = "El nombre de la tarea<br> no puede quedar vacío";
        return;
    }
    // 2e - restaurar edicion error
    document.querySelector("#edicionError").innerHTML = "";
    let estadoEditado = document.querySelector("#edicionEstado").value;
    let orden = e.target.dataset.id
    document.querySelector("#vistaEdicion").style.display = "none";
    tareas[orden].tarea = tareaEditada;
    tareas[orden].estado = estadoEditado;
    localStorage.setItem("Tareas", JSON.stringify(tareas));
    rendertabla();
    asignarEscuchas();
})