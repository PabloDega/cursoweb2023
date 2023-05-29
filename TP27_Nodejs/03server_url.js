let http = require("http");

let server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Home</h1><p>Bienvenido a mi Servidor Web desarrollado con Nodejs</p>");
    res.end();
  } else if (req.url == "/servicios") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Servicios</h1><p>Estos son los servicios de mi sitio</p>");
    res.end();
  } else if (req.url == "/contacto") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Contacto</h1><a href='#'>contacto@gmail.com</a>");
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h1>Pagina inexistente</h1><p>Por favor verifica la dirección ingresada</p>");
    res.end();
  }
});

server.listen(5000);

console.log("Servidor ejecuntandose en http://localhost:5000");
