// using old import and export syntax

function encrypt(data) {
  return "encrypted data";
}
function send(url, data) {
  const encryptdata = encrypt(data);
  console.log(`Sending ${encryptdata} to ${url}`);
}

module.exports = {
  send,
};
