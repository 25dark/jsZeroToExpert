const express = require("express");
const app = express();

app.use((req, res) => {
  console.log("WE GOT A NEW REQUEST");
  console.log("HELLO WE GOT YOUR REQUEST, THIS IS A RESPONSE");
});

app.listen(3000, () => {
  console.log("LISTENING ON PORT 3000");
});
