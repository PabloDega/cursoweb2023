//--- forEach

let items = ["rojo", "naranja", "amarillo", "verde", "azul", "violeta"];

items.forEach((item) => console.log(item));

/* function consola(item){
    console.log(item);
}
items.forEach(consola); */



const numeros = [2, 9, 12, 5, 8, 3];
console.log(numeros);

let unir = numeros.join();
console.log(unir);

let separar = unir.split(",");
console.log(separar);

let renumerado = [];
separar.forEach((numero, i) => {renumerado[i] = Number(numero)});
console.log(renumerado);


//--- map

let items2 = items;
console.log(items, items2);
items.push(19);
console.log(items, items2);
console.log(items === items2);
// ^ Duplicado por referencia

let items3 = Array.from(items);
console.log(items, items3);
items.push("cian");
console.log(items, items3);

// Map, nuevo array pasado por un callback
/* let items4 = items.map(mapeado);
function mapeado(a){
    return a;
} */
let items4 = items.map(a => a);

console.log(items, items4);
items.push(100);
console.log(items, items4);

let items5 = items.map(a => "color: " + a);
console.log(items5);

//--- find

console.log(items.find(color => color == "verde"));
console.log(items.findIndex(color => color == "verde"));

//--- reduce

const total = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
console.log(total);

//--- delete

console.log(items);

/* items = [];
console.log(items); */

/* numeros = [];
console.log(numeros); */

/* items.splice(0, items.length);
console.log(items); */

//--- indexOf
console.log(items.indexOf("azul"));
console.log(items.indexOf("papas fritas"));

//--- Busqueda en Array de Array

const datos = [["Pablo", 1234], ["Juan", 2345], ["Rodrigo", 3456]];
console.log(datos);

function buscarNumero(nombre){
    datos.forEach((dato, i) => {
        let respuesta = dato.indexOf(nombre);
        if(respuesta >= 0){
            console.log(datos[i][dato.indexOf(nombre)+1]);
        }
    })
}
buscarNumero("Juan");