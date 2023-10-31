const express = require("express");
const connectDB = require("./config/dbConnection");
const booksRoutes = require("./routes/booksRoutes");
const app = express();

app.use(express.json());

app.use("/", booksRoutes);
connectDB();
module.exports = app;
