// require("dotenv").config();

const mongoose = require("mongoose");
const url =
  "mongodb+srv://webohboy:anmols1234@cluster0.briml.mongodb.net/Biding_System?retryWrites=true&w=majority";
mongoose
  .connect(url)
  .then(() => {
    console.log("Successfully connected to database");
  })
  .catch((error) => {
    console.log("database connection failed. exiting now...");
    console.error(error);
    process.exit(1);
  });
