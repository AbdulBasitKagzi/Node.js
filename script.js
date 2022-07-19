// const EventEmitter = require("events");

// // celebrity emitting event
// const celebrity = new EventEmitter();

// // observer observing celebrity here callback function is observer
// celebrity.on("race win", () => {
//   console.log("yes you won");
// });
// process.on("exit", () => {
//   console.log("exited");
// });
// // to emit the event
// celebrity.emit("race win");

const http = require("http");

http.get("http://www.Google.com", (res) => {
  res.on("data", (chunk) => {
    console.log(`Data chunk is ${chunk}`);
  });
  res.on("end", () => {
    console.log("No more data");
  });
});
