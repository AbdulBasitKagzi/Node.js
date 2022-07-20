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
  if (req.method === "POST" && items[1] === "friends") {
    req.on("data", (data) => {
      // here we will receive buffer data which we will convert to string with help of tostring method
      const friend = data.toString();
      console.log("data:", friend);
      //  again we will convert the data to json to store it into friends object above
      friends.push(JSON.parse(friend));
    });
    req.pipe(res);
  } else if (req.method === "GET" && items[1] === "friends") {
    res.writeHead(200, { "Content-Type": "application/json" });
    if (items.length === 3) {
      const indexofFriends = +items[2];
      res.end(JSON.stringify(friends[indexofFriends]));
    } else {
      res.end(JSON.stringify(friends));
    }
    // "+" is used to convert string to number
  } else if (items[1] === "message") {
    // alternate form of setting header
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end(`there is a ${req.url} for you`);
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(3000);
