const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // console.log(process.env.CONNECTION_STRING);
    const connect = await mongoose.connect(process.env.CONNECTION_STRING);
    // console.log(connect);
    console.log("database connected to host:", connect.connection.host);
  } catch {}
};

module.exports = connectDB;
