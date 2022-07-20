const express = require("express");

const app = express();

const PORT = 3000;

const friends = [
  {
    id: 0,
    name: "abdulbasit",
  },
  {
    id: 1,
    name: "rehan",
  },

  {
    id: 2,
    name: "huzifa",
  },
];
// using middleware
// here next is a middle ware which is used to watch request and next() is use to move the code forward to app.get
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}  `);
  next();
});
app.use(express.json());

app.get("/friends", (req, res) => {
  res.send(friends);
});
app.post("/friends", (req, res) => {
  if (!req.body.name) {
    res.status(400).json({
      error: "Not possible to add friend",
    });
  } else {
    const newFriend = {
      name: req.body.name,
      id: friends.length,
    };
    friends.push(newFriend);
    res.json(newFriend);
  }
});

app.get("/friends/:id", (req, res) => {
  const fid = +req.params.id;
  console.log(fid);
  const friend = friends[fid];
  console.log(friend);
  if (friend) {
    res.json(friend);
  } else {
    res.sendStatus(404);
  }
});
app.get("/messages", (req, res) => {
  res.send(`There is a message for you`);
});

app.listen(PORT, () => {
  console.log("Listening at port :", PORT);
});
