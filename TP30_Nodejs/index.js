const express = require("express");
const app = express();
const url = require("url");



const PUERTO = 3000;

app.listen(PUERTO, () => {
    console.log(`Servidor activo en http://localhost:${PUERTO}`);
});

app.get("/privado", (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-type", "Text/html");
    res.sendFile(__dirname + "/privado/login.html");
})

// login con get
/* app.get("/privado/log", (req, res) => {
    const urlActual = url.parse(req.url, true);
    if(urlActual.query.pass == "123"){
        res.statusCode = 200;
        res.setHeader("Content-type", "Text/html");
        res.sendFile(__dirname + "/privado/precios.html");
    } else {
        res.sendFile(__dirname + "/privado/rejected.html");
    }
}); */

// login con post

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/privado/log", (req, res) => {
    if(req.body.pass == "123"){
        res.statusCode = 200;
        res.setHeader("Content-type", "Text/html");
        res.sendFile(__dirname + "/privado/precios.html");
    } else {
        res.sendFile(__dirname + "/privado/rejected.html");
    }
});

app.use(express.static("public"));