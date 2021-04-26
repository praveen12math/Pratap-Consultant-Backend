const mongoose = require("mongoose");

var hieringSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Hiering", hieringSchema);
