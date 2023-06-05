const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const fecha = require('date-and-time');

const logEvent = (datosLog) => {
    const now = new Date();
    let logText = `${fecha.format(now, 'DD/MM/YYYY HH:mm:ss')}\t${uuidv4()}\t${datosLog}\n`;
  try {
    fs.appendFileSync(__dirname+"/log/logs.txt", logText);
  } catch (error) {
    console.log(error);
  }
};

module.exports = logEvent;
