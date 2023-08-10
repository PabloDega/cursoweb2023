// Funciones declaradas

function holaMundo(){
    console.log("Hola mundo!!!");
}

holaMundo();

// Expresion

const saludo = function(){
    console.log("Hola mundo");
}

saludo();

console.log(saludo());

// Return

function calculo(){
    let suma = 30 + 20;
    return suma;
}

console.log(calculo);

console.log(calculo());

// Parametros y argumentos

function saludar(nombre){
    return "Hola " + nombre;
    let masAcciones = "bloqueadas por el return"
    // return `Hola ${nombre}`;
}
saludar("pablo");
// console.log(saludar("pablo"));
// let texto = saludar("pablo");
// console.log(texto);

// sintesis de lo anterior
/* function saludar(nombre){
    console.log("Hola " + nombre)
}

saludar("pablo");
saludar("pedro");
saludar("juan") */

//Calculadora

let sumar = function(num1, num2){
    let calculo = num1 + num2;
    return calculo;
}

console.log(sumar(3, 3));

let restar = function(num1, num2){
    let restar = num1 - num2;
    return restar;
    // return num1 - num2;
}

console.log(restar(6, 3));


//Calculadora

function calculadora(num1, num2, operacion){
    // let resultado;
    switch(operacion){
        case "suma":
        // resultado = num1 + num2;
        return num1 + num2;
        break;
        case "resta":
        resultado = num1 - num2;
        break;
        case "multiplicacion":
        resultado = num1 * num2;
        break;
        case "division":
        resultado = num1 / num2;
        break;
    };
    // return resultado;
}

console.log(calculadora(2, 2, "suma"));

// Funcion de Flecha

/* const sumar = (a, b) => a + b;

console.log(sumar(1, 2)) */

// Sentencia multiple

/* const calculadora = (a, b) =>{
    let suma = a + b;
    let resta = a - b;
    let multiplicacion = a * b;
    let division = a / b;
    return "" + suma + resta + multiplicacion + division;
}
console.log(calculadora(3, 3)); */


// Callback

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const multiplicacion = (a, b) => a * b;
const division = (a, b) => a / b;

const calculadora2 = (a, b, operacion) =>{
    return operacion(a, b);
}

console.log(calculadora2(3, 3, suma));
console.log(calculadora2(3, 3, resta));
console.log(calculadora2(3, 3, multiplicacion));
console.log(calculadora2(3, 3, division));