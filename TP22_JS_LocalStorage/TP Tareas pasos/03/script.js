// let tareas = [];

// 2 - Cargar data del localStorage en array on load
let tareas = JSON.parse(localStorage.getItem("Tareas")) || [];

console.log(tareas);

document.querySelector("#agregarTareaBtn").addEventListener("click", agregarTarea)

const inputTarea = document.querySelector("#tareaInput");

function agregarTarea(){
    let tarea = {
        id: tareas.length,
        tarea: inputTarea.value,
        estado: "Pendiente",
    }
    tareas.push(tarea);
    // 1 - ver local storage, agregar varias tareas, refresh
    localStorage.setItem("Tareas", JSON.stringify(tareas));
    inputTarea.value = "";
}