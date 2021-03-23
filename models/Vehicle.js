const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");

const vehicleSchema = new mongoose.Schema({
  VehicleName: {
    type: String,
  },
  Brand: {
    type: String,
  },
  vehicleType: {
    type: String,
  },
  RegistrationNumber: {
    type: String,
  },
  VehicleRCNumber: {
    type: String,
  },
  VehicleNumber: {
    type: String,
  },
  Colour: {
    type: String,
  },
  CarinsuranceNumber: {
    type: String,
  },
});

module.exports = mongoose.model("Vehicle", vehicleSchema);
