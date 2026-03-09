const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://deeksha:admin@cluster0.drzrsgw.mongodb.net/devTinder",
  );
};

connectDB()
  .then(() => {
    console.log("Database Connected...");
  })
  .catch((err) => {
    console.error("Database can't be connected...");
  });
