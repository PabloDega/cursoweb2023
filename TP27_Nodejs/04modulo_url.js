let http = require("http");
let url = require("url");

let server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("Utilizando el modulo URL para analizar la info recibida por GET <br>");
  let x = url.parse(req.url, true);
  res.write(JSON.stringify(x));
  // res.write("<br>");
  // res.write(JSON.stringify(x.query));
  res.end();
});

server.listen(5000);

console.log("Servidor ejecuntandose en http://localhost:5000");
