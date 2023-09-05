// let tareas = [];

let tareas = JSON.parse(localStorage.getItem("Tareas")) || [];

console.log(tareas);

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
    // 2 - actualizar tabla al cargar nuevo dato
    rendertabla()
}

// 1 - Cargar contenido del array en la tabla

const tableBody = document.querySelector("#tareasTabla tbody");

function rendertabla() {
    //--- vaciar el body
    tableBody.innerHTML = "";
    //--- Inyectar array
    tareas.forEach((tarea) => {
        let fila = `<tr>
                    <td>${tarea.id}</td>
                    <td>${tarea.tarea}</td>
                    <td>
                        <span class="btn naranja">
                            ${tarea.estado}
                        </span>
                    </td>
                    <td>
                        <span class="btn azul">Editar</span>
                        <span class="btn azul">Borrar</span>
                    </td>
                </tr>`;
        tableBody.innerHTML += fila;
    })
}

rendertabla()