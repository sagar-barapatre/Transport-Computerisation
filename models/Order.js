const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");

const orderSchema = new mongoose.Schema({
  Date: {
    type: String,
  },
  Pricing: {
    type: String,
  },
  Drivers: {
    type: String,
  },
  Vehicles: {
    type: String,
  },
  PickupState: {
    type: String,
  },
  PickupCity: {
    type: String,
  },
  DropState: {
    type: String,
  },
  DropCity: {
    type: String,
  },
  firstandlastname: {
    type: String,
  },
  emailID: {
    type: String,
  },
  extraMessages: {
    type: String,
  },
});

module.exports = mongoose.model("Order", orderSchema);
