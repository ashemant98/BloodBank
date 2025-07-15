const mongoose = require("mongoose");
require("dotenv").config();
async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGOOSE_KEY);
    console.log("database connected successfully");
  } catch (e) {
    console.log("error in connecting database");
  }
}

module.exports = connectDB;
