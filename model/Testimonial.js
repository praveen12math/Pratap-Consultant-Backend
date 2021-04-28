const mangoose = require("mongoose");

var testimonialSchema = new mangoose.Schema(
  {
    photo: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mangoose.model("Testimonial", testimonialSchema);
