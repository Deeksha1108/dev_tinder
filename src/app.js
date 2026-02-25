const express = require("express");

const app = express();

// app.use("/ab*c", (req, res) => { // call with these also output will be same (abDEEkshac).....add anything in between
//   res.send("Hello from the Namaste Nodejs (ExpressJS)!");
// });

// app.use("/ab?c", (req, res) => {  // call with these also output will be same (ac).....b is optional here
//   res.send("Hello from the server!");
// });

// app.use("/ab+c", (req, res) => {  // call with these also output will be same (abbbbbbbbbbbbbc).....add multiple b after b+
//   res.send("Hello from the server!");
// });

app.get("/users/:userId/:name", (req, res) => {
  console.log(req.params);
  res.send({ firstName: "Deeksha", lastName: "Singh" });
});

app.post("/users", (req, res) => {
  res.send("Data saved successfully to DB.");
});

app.delete("/users", (req, res) => {
  res.send("Data deleted successfully");
});

app.use("/test", (req, res) => {  // request handler
  res.send("Bla Bla Bla!");
});

app.listen(3000, () => {
  console.log("Server is running...");
});
