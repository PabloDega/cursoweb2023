let form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    validar();
})

function validar(){
    const nombre = document.querySelector("#nombre");
    const apellido = document.querySelector("#apellido");
    const dni = document.querySelector("#dni");
    const letrasAprobadas = "abcdefghijklmnñoprqstuvwxyzáéíóúäëïöü ".split("");
    const numerosAprobados = "1234567890".split("");


    // verificar campos vacios
    if(nombre.value == "" || apellido.value == "" || dni.value == ""){
        window.alert("Debe completar todos los datos");
        return;
    }
    if(dni.value.length != 8){
        window.alert("El DNI debe tener 8 digitos");
        return;
    }

    // verificar tipo de dato
    for(let i = 0; i < nombre.value.length; i++){
        let letra = nombre.value[i].toLowerCase();
        letra = letrasAprobadas.indexOf(letra);
        if(letra == -1){
            window.alert("El Nombre solo acepta letras");
            return;
        }
    }
    for(let i = 0; i < apellido.value.length; i++){
        let letra = apellido.value[i].toLowerCase();
        letra = letrasAprobadas.indexOf(letra);
        if(letra == -1){
            window.alert("El Apellido solo acepta letras");
            return;
        }
    }
    for(let i = 0; i < dni.value.length; i++){
        let numero = dni.value[i].toLowerCase();
        numero = numerosAprobados.indexOf(numero);
        if(numero == -1){
            window.alert("El DNI solo acepta numeros");
            return;
        }
    }
    console.log("validacion pasada");
    const resultados = document.querySelector("#resultados");
    const textoResultado = document.createElement("p");
    textoResultado.innerHTML = `Nombre: ${nombre.value}<br> Apellido: ${apellido.value}<br> DNI: ${dni.value}`;
    resultados.appendChild(textoResultado);
}