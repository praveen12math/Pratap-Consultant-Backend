const mongoose = require("mongoose");

var connectSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("connect", connectSchema);
