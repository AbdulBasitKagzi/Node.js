const path = require("path");
// to provide absolute path of the file
// path.join(__dirname, "..", "pulbic", "skimountain.jpg");

function getMessage(req, res) {
  // use of the absolute path and sendFile() with send the file
  res.sendFile(path.join(__dirname, "..", "public", "skimountain.jpg"));
  //   res.send(`There is a message for you`);
}

module.exports = {
  getMessage,
};
