const express = require("express");
const app = express();
const mongoose = require("mongoose");

const userRoute = require("./route/user");

const dotenv = require("dotenv");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB connection successful");
  })
  .catch((err) => {
    console.log(err, "connection unsuccessful");
  });

  app.use(express.json());
  app.use("/api/users", userRoute);


app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running on 5000");
});
