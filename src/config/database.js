const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    process.env.MONGODB_URI,
  );
};

connectDB()
  .then(() => {
    console.log("Database Connected...");
  })
  .catch((err) => {
    console.error("Database can't be connected...");
  });
