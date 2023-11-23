const express = require("express");
const app = express();

// app.use((req, res) => {
//   console.log("WE GOT A NEW REQUEST");
//   res.send("<h1>This is my header</h1>");
// });

app.get("/cats", (req, res) => {
  console.log("cat request");
});
// /cats => 'meow'
// /dogs => 'woof'
// '/'

app.listen(3000, () => {
  console.log("LISTENING ON PORT 3000");
});
