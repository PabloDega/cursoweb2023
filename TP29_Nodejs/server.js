const logEvent = require("./log");

const http = require("http");
const fs = require("fs");
const path = require("path");
const mime = require("mime");

const puerto = 3000;

const server = http.createServer((req, res) => {
    if (req.url === "/") {
      let resFile = __dirname + "/vistas/index.html";
      let resMime = mime.getType(resFile);
      res.statusCode = 200;
      res.setHeader("Content-type", resMime);
      try {
        fs.createReadStream(resFile).pipe(res);
      } catch (error) {
        console.log(error);
      }
      logEvent(`${req.url}\t${req.method}\t 200`);
    } else if (req.url === "/otro.html") {
      let resFile = __dirname + "/vistas/otro.html";
      let resMime = mime.getType(resFile);
      res.statusCode = 200;
      res.setHeader("Content-type", resMime);
      try {
        fs.createReadStream(resFile).pipe(res);
      } catch (error) {
        console.log(error);
      }
      logEvent(`${req.url}\t${req.method}\t 200`);
    } else if (req.url === "/css/estilo.css") {
      let resFile = __dirname + "/css/estilo.css";
      let resMime = mime.getType(resFile);
      res.statusCode = 200;
      res.setHeader("Content-type", resMime);
      try {
        fs.createReadStream(resFile).pipe(res);
      } catch (error) {
        console.log(error);
      }
      logEvent(`${req.url}\t${req.method}\t 200`);
    } else if (req.url === "/favicon.ico") {
      let resFile = __dirname + "/img/favicon.ico";
      let resMime = mime.getType(resFile);
      res.statusCode = 200;
      res.setHeader("Content-type", resMime);
      try {
        fs.createReadStream(resFile).pipe(res);
      } catch (error) {
        console.log(error);
      }
      logEvent(`${req.url}\t${req.method}\t 200`);
    } else if (path.extname(req.url) === ".jpg" || path.extname(req.url) === ".png") {
      let resFile = __dirname + req.url;
      let resMime = mime.getType(resFile);
      res.statusCode = 200;
      res.setHeader("Content-type", resMime);
      try {
        fs.createReadStream(resFile).pipe(res);
      } catch (error) {
        console.log(error);
      }
      logEvent(`${req.url}\t${req.method}\t 200`);
    } else {
      let resFile = __dirname + "/vistas/404.html";
      let resMime = mime.getType(resFile);
      res.statusCode = 404;
      res.setHeader("Content-type", resMime);
      try {
        fs.createReadStream(resFile).pipe(res);
      } catch (error) {
        console.log(error);
      }
      logEvent(`${req.url}\t${req.method}\t 404`);
    }
  }).listen(puerto, () =>
    console.log(`Servidor ectivo en http://localhost:${puerto}`)
  );
