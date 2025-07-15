const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      required: true,
      enum: ["donar", "admin", "hospital", "NGO"],
    },
    username: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      unique: true,
      required: true,
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
