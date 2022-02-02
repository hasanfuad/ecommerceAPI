const express = require("express");
const app = express();
const mongoose = require("mongoose");

const userRoute = require("./routes/user");
const authRoute = require("./routes/auth")
const productRoute = require("./routes/product");

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

  app.use("/api/auth", authRoute);
  app.use("/api/users", userRoute);
  app.use("/api/products", productRoute);


app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running on 5000");
});
