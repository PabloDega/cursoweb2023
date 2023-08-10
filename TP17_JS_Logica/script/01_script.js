// Condicional "if"

/* if(2 > 1){
    console.log("2 es mayor que 1");
} */

// If else

/* let num1 = 50;
let num2 = 10;

if(num1 > num2){
    console.log("numero 1 mayor que numero 2");
} else {
    console.log("numero 2 mayor que numero 1");
} */

/* let num3 = window.prompt("Ingresar numero 1");
let num4 = window.prompt("Ingresar numero 2");

if(num3 > num4){
    console.log(num3 + " es mayor que " + num4)
} else {
    console.log(num4 + " es mayor que " + num3)
} */


// If else if

/* let semaforo = "verde";
// let semaforo = window.prompt("Ingresar luz del semaforo");

if(semaforo == "verde"){
    console.log("Puede avanzar")
} else if(semaforo == "amarillo"){
    console.log("Precaución")
} else if(semaforo == "rojo"){
    console.log("Detenerse")
} else {
    console.log("Semaforo roto")
} */

/* let valorCompra = window.prompt("Valor de compra");

if(valorCompra >= 50000){
    console.log("Monto final: " + valorCompra*0.75 + "\n descuento del 25%");
} else if (valorCompra >=20000){
    console.log("Monto final: " + valorCompra*0.90 + "\n descuento del 10%");
} else{
    console.log("Monto final: " + valorCompra);
} */


// Switch

/* let semaforo = window.prompt("Ingresar luz del semaforo");

switch(semaforo){
    case "verde":
        console.log("Avanzar");
        break;
    case "amarillo":
        console.log("Precaucion");
        break;
    case "rojo":
        console.log("Detenerse");
        break;
    default:
        console.log("Semaforo roto");
        break;
} */


// Operador Ternario

let edad = window.prompt("Edad");

let respuesta;

if(edad >= 18){
    // let respuesta = "lalala"
    respuesta = "Puede ingresar";
} else {
    respuesta = "Rechazado";
}

// let respuesta = edad >= 18 ? "Puede ingresar" : "Recahzado";

console.log(respuesta);


// Operadores

/* let verdadero = true;
let falso = false;

let resultado = verdadero && falso;
console.log(resultado); */

/* let valor1 = 10;
let valor2 = 10;
let valor3 = 20;
let valor4 = 20;

if(valor1 == valor2 && valor3 == valor4){
    resultado = "Coincidencias";
} else {
    resultado = "Diferencias";
}
console.log(resultado); */


// Ejemplo - llevando 10 o mas productos que sumen más de $15.000 te damos 20% de descuento

/* let cantidad = window.prompt("Cantidad de productos");
let precioUnitario = window.prompt("Precio unitario");

if(cantidad >= 10 && precioUnitario*cantidad >= 15000){
    console.log("Precio con descuento: " + (precioUnitario*cantidad)*0.8);
} else {
    console.log("Precio sin descuento: " + precioUnitario*cantidad);
} */


// Otra opcion con "or"

/* let a = undefined;
let b = 20;
console.log(a || b); */
