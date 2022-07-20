const http = require("http");

let friends = [
  { id: 0, name: "abdulbasit" },
  { id: 1, name: "humed" },
  { id: 2, name: "shadab" },
];

const server = http.createServer((req, res) => {
  //   console.log(req.url);
  const items = req.url.split("/");
  //   console.log(items);

  if (items[1] === "friends") {
    res.writeHead(200, { "Content-Type": "application/json" });

    // "+" is used to convert string to number
    const indexofFriends = +items[2];
    res.end(JSON.stringify(friends[indexofFriends]));
  } else if (items[1] === "message") {
    // alternate form of setting header
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end(`ther is a ${req.url} for you`);
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(3000);
