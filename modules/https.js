// using old import and export syntax

const request = require("./requestmodule.js");
const response = require("./responsemodule");

function Makerequest(url, data) {
  request.send(url, data);
  return console.log(response.read());
}

Makerequest("https://www.google.com", "hello");
