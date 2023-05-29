let http = require("http");

let server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("Bienvenido a mi Servidor Web desarrollado con Nodejs");
  // console.log(req);
  // res.write(req.url);
  console.log(req.url, req.method);
  res.end();
});

server.listen(5000);

console.log("Servidor ejecuntandose en http://localhost:5000");
