let tareas = JSON.parse(localStorage.getItem("Tareas")) || [];

document.querySelector("#agregarTareaBtn").addEventListener("click", agregarTarea)

const inputTarea = document.querySelector("#tareaInput");

function agregarTarea() {
    let tarea = {
        id: tareas.length,
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
        // 3a - pasar dataset con id de objeto al renderizar
        // 7 - Asignar clase de color de acuerdo al estado
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

//--- Agregar funcionalidad a los botones
function asignarEscuchas() {
    document.querySelectorAll(".tablaBtnEstado").forEach((boton) => {
        boton.addEventListener("click", (e) => {
            console.log("Test boton Estado");
            //1 - Llamar funcion para modular codigo
            tareaCambiarEstado(e);
        })
    })

    document.querySelectorAll(".tablaBtnEditar").forEach((boton) => {
        boton.addEventListener("click", () => {
            console.log("Test boton Editar")
        })
    })

    document.querySelectorAll(".tablaBtnBorrar").forEach((boton) => {
        boton.addEventListener("click", () => {
            console.log("Test boton Borrar")
        })
    })
}

asignarEscuchas();

//  2 - Funciones para los botones

function tareaCambiarEstado(e){
    //-- ver la info que llega con el evento
    console.log(e.target);
    console.log(e.target.classList);
    let tareaBoton = e.target;
    if(tareaBoton.innerText == "Pendiente"){
        // 2 - agregar funcionalidad estética
        console.log("ping")
        tareaBoton.classList.remove("naranja");
        tareaBoton.classList.add("verde");
        tareaBoton.innerText = "Completada";
        // 3b - modificar arrray y salvar en localStorage
        // ---- leer el data set del objeto para usar como inddice del array
        // console.log(e.target.dataset.id);
        let orden = e.target.dataset.id;
        // console.log(tareas[orden])
        tareas[orden].estado = "Completada";
        console.log(tareas)
    } else {
        // 4 - Hacer lo mismo para dejar en modo "Pendiente"
        tareaBoton.classList.remove("verde");
        tareaBoton.classList.add("naranja");
        tareaBoton.innerText = "Pendiente";
        let orden = e.target.dataset.id;
        tareas[orden].estado = "Pendiente";
        console.log(tareas)
    }
    // 5 - grabar modificacion en localStorage
    localStorage.setItem("Tareas", JSON.stringify(tareas));
    // 6 - Renderizar tabla
    rendertabla();
    asignarEscuchas();
}