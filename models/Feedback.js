const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");

const feedbackSchema = new mongoose.Schema({
  FullName: {
    type: String,
  },
  EmailID: {
    type: String,
  },
  Company: {
    type: String,
  },
  Subject: {
    type: String,
  },
  Message: {
    type: String,
  },
});

module.exports = mongoose.model("Feedback", feedbackSchema);
