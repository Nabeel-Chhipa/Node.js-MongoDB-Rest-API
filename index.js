const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

mongoose
  .connect(
    process.env.MONGO_URL
  )
  .then(() => console.log("Db Connection Successfully."))
  .catch((err) => console.log(err));

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running.");
});
