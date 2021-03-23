const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");

const driverSchema = new mongoose.Schema({
  FullName: {
    type: String,
  },
  DateOfBirth: {
    type: String,
  },
  Age: {
    type: Number,
  },
  DrivingLicenseNumber: {
    type: String,
  },
  AadharCardNumber: {
    type: String,
  },
  Address: {
    type: String,
  },
  PhoneNumber: {
    type: String,
  },
  Gender: {
    type: String,
  },
  EmailID: {
    type: String,
  },
});

module.exports = mongoose.model("Driver", driverSchema);
