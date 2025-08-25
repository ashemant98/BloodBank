const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      required: true,
      enum: ["Donar", "Admin", "Hospital", "NGO"],
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
    hospitalName: {
      required: function () {
        if (this.role === "hospital") return true;
        else return false;
      },
      type: String,
    },
    ngoName: {
      required: function () {
        if (this.role === "NGO") return true;
        else return false;
      },
      type: String,
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
