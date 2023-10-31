const express = require("express");
// const app = require("./app");
const dotenv = require("dotenv").config();

const app = express();
app.use(express.json());
const connectDB = require("./config/dbConnection");

const booksRoutes = require("./routes/booksRoutes");

app.use("/", booksRoutes);
connectDB();

PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server is on port ${PORT}`);
});
