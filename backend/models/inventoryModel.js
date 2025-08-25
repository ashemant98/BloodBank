const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema({
  inventoryType: {
    type: String,
    enum: ["IN", "OUT"],
    required: true,
  },
  bloodGroup: {
    type: String,
    enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },

  donar: {
    required: function () {
      if (this.inventoryType === "IN") return true;
      else return false;
    },
    type: mongoose.Types.ObjectId,
    ref: "user",
  },

  hospitalName: {
    required: function () {
      if (this.inventoryType === "OUT") return true;
      else return false;
    },
  },
});

const inventoryModel = mongoose.model("inventory", inventorySchema);

module.exports = inventoryModel;
