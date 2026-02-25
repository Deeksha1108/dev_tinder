const express = require("express");

const app = express();

app.use("/home", (req, res) => { // request handler
  res.send("Hello from the Namaste Nodejs (ExpressJS)!");
});

app.use("/hello", (req, res) => {  // request handler
  res.send("Hello from the server!");
});

app.use("/test", (req, res) => {  // request handler
  res.send("Bla Bla Bla!");
});

app.listen(3000, () => {
  console.log("Server is running...");
});
