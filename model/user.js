const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  degree: {
    type: String,
    required: true,
  },
  resume: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("USER", userSchema);
