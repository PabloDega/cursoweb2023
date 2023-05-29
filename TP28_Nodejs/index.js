let http = require("http");
let fs = require("fs");

http.createServer((req, res) => {
    if (req.url == "/") {
        res.writeHead(200, { "Content-type": "text/html" });
        fs.createReadStream("./webfiles/index.html").pipe(res);
    } else if (req.url == "/contacto"){
        res.writeHead(200, { "Content-type": "text/html" });
        fs.createReadStream("./webfiles/contacto.html").pipe(res);
    } else if (req.url == "/servicios"){
        res.writeHead(200, { "Content-type": "text/html" });
        fs.createReadStream("./webfiles/servicios.html").pipe(res);
    } else {
        res.writeHead(404, { "Content-type": "text/html" });
        res.write("No se pudo encontrar el siito que está buscando, regresa a <a href='./'>inicio</a> para retomar su busqueda")
    }
}).listen(3000);

console.log("Servidor ejecuntandose en http://localhost:3000");
