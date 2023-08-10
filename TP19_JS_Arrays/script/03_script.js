let miArray = [1, 7, 5, 20];
console.log(miArray);

let miSet = new Set(miArray);
console.log(miSet);

//--- agregar dato

miArray.push(8);
console.log(miArray);

miSet.add(8);
console.log(miSet);

//--- agragar dato repetido

miArray.push(8);
console.log(miArray);

miSet.add(8);
console.log(miSet);

//--- borrar el numero 4

miArray.splice(3, 1);
console.log(miArray);

miSet.delete(20);
console.log(miSet);

//--- Mediar largo

console.log(miArray.length);

console.log(miSet.size);

//--- buscar valor

console.log(miArray.find(valor => valor == 7));

console.log(miSet.has(7));

//--- vaciar contenido

miArray = [];
console.log(miArray);

miSet.clear();
console.log(miSet);