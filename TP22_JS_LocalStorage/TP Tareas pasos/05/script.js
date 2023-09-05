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
        // 1 - Declaramos nueva clase a los botones para agregar funcionalidad en grupo
        let fila = `<tr>
                    <td>${tarea.id}</td>
                    <td>${tarea.tarea}</td>
                    <td>
                        <span class="btn naranja tablaBtnEstado">
                            ${tarea.estado}
                        </span>
                    </td>
                    <td>
                        <span class="btn azul tablaBtnEditar">Editar</span>
                        <span class="btn azul tablaBtnBorrar">Borrar</span>
                    </td>
                </tr>`;
        tableBody.innerHTML += fila;
    })
}

rendertabla();

// 3 - Ver que si agregamos nuevo item el mismo carece de eventListener, crear funcion y llamarla desde agregarTarea
function asignarEscuchas() {
    // 2 - Seleccionamos y escuchamos a los botones
    document.querySelectorAll(".tablaBtnEstado").forEach((boton) => {
        boton.addEventListener("click", () => {
            console.log("Test boton Estado")
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