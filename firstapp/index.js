const express = require("express");
const app = express();

// app.use((req, res) => {
//   console.log("WE GOT A NEW REQUEST");
//   res.send("<h1>This is my header</h1>");
// });

app.get("/", (req, res) => {
  res.send("<h1>This is the homepage</h1>");
});

app.get("/dogs", (req, res) => {
  res.send("Dog page");
});

app.get("/cats", (req, res) => {
  res.send("cat page");
});
// /cats => 'meow'
// /dogs => 'woof'
// '/'

app.listen(3000, () => {
  console.log("LISTENING ON PORT 3000");
});
