const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/friends") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        name: "abdulbasit",
        office: "la net",
      })
    );
  } else if (req.url === "/message") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end(`ther is a ${req.url} for you`);
  }
});

server.listen(3000);
