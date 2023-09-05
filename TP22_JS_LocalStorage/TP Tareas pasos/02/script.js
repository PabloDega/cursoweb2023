const inputTarea = document.querySelector("#tareaInput");

let tareas = [];

document.querySelector("#agregarTareaBtn").addEventListener("click", () => {
    let tarea = {
        id: tareas.length,
        tarea: inputTarea.value,
        estado: "Pendiente",
    }
    console.log(tarea);
    tareas.push(tarea);
    console.log(tareas);
    inputTarea.value = "";
})