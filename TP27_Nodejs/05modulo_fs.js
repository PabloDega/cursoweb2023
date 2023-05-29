const fs = require("fs");

//--- Lectura

/* console.log("1");

fs.readFile("./data/texto.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});

console.log("2");

const textoSync = fs.readFileSync("./data/texto.txt", "utf-8");
console.log(textoSync);

console.log("3"); */

//--- Creación

/* fs.writeFile("./data/data1.txt", "Soy un texto creado por node", (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Archivo creado");
  }
}); */

// fs.writeFileSync("./data/data1.txt", "Soy un texto creado por node");

//--- Renombrar

/* fs.rename("./data/data1.txt", "./data/data01.txt", (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Archivo renombrado");
  }
}); */

//--- Agregar texto

/* fs.appendFile("./data/data01.txt", "\nSoy informacion agregada", (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Informacion agregada");
  }
}); */

//--- Copiar un archivo

fs.writeFileSync("./data/original.txt", "Soy un archivo para copiar");

const archivo = fs.createReadStream("./data/original.txt");
archivo.pipe(fs.createWriteStream("./data/copia.txt"))

//-- Borrar un archivo

/* fs.unlink("./data/data01.txt", (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Archivo borrado");
  }
}); */