const datos = {
    nombre: "Pablo",
    apellido: "Deganis",
    mail: "pablodeganis@yahoo.com.ar",
    direccion: "Calle falsa 123",
    telefono: 46421317,
    saludar: () => {}
}

// Leer propiedades

console.log(datos);

console.log(datos.nombre);
console.log(datos["apellido"]);

let porpiedades = Object.keys(datos);
console.log(porpiedades);

let valores = Object.values(datos);
console.log(valores);



// Modificar propiedades

datos.nombre = "Ignacio";
console.log(Object.values(datos));
console.log(datos.nombre);

// Añadir propiedades nuevas

datos.edad = 40;
console.log(datos);

// Borrar una propiedad

delete datos.direccion;
console.log(datos);

// For in - recorrer el objeto

for (const x in datos){
    console.log(x);
}

for (const x in datos){
    console.log(datos[x]);
}

for (const x in datos){
    console.log(x + ": " + datos[x]);
}

// Metodos

const curso = {
    nombre: "Programación web",
    sede: "San Miguel",
    turno: "tarde",
    año: 2023,
    inscriptos: 26,
    saludar: function(){
        console.log("Hola alumnos de " + this.nombre)
    },
    estado: function(){
        if(this.inscriptos > 25){
            console.log("curso completo")
        } else {
            console.log("Quedan vacantes")
        }
    }
}
curso.saludar();
curso.estado();
curso.nombre = "Prog Web";
curso.saludar();
curso.inscriptos = 5;
curso.estado();
