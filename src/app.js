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

app.use(
  "/users",
  (req, res, next) => {
    // It is called a dynamic routes
    console.log("Handling the routes users");
    // res.send("Response!!");    // Output is Response!! but Iss line ko comment krk fir yeh route hit krte h then yeh infinite loop me hii ghumta rhega next response pe nii jayega yhi infinite ghumta rhega jb tk aap next() nii lgaoge tb tk isiliye next() ka use kiya jata h kii hmara route/middleware infinite me na ghume
    next(); // agr hum iss next() ko res.send se upr le jaye then yeh error dedega
  },
  (req, res) => {
    console.log("Handling the route User 2!!");
    res.send("2nd Response!!");
    // next();
  },
  //   (req, res) => {
  //     console.log("Handling the route User 3!!");
  //     res.send("3rd Response!!");
  //   },
  //   (req, res) => {
  //     console.log("Handling the route User 4!!");
  //     res.send("4th Response!!");
  //   },
  //   (req, res) => {
  //     console.log("Handling the route User 5!!");
  //     res.send("5th Response!!");
  //   },
);

app.get("/users/:userId/:name", (req, res) => {
  // It is called a dynamic routes
  console.log(req.params);
  res.send({ firstName: "Deeksha", lastName: "Singh" });
});

app.post("/users", (req, res) => {
  res.send("Data saved successfully to DB.");
});

app.delete("/users", (req, res) => {
  res.send("Data deleted successfully");
});

app.use("/test", (req, res) => {
  // request handler
  res.send("Bla Bla Bla!");
});

app.listen(3000, () => {
  console.log("Server is running...");
});
