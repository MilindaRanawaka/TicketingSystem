const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Trip Model
const tripSchema = new Schema(
  {
    routeID: { type: String, required: true, trim: true },
    busID: { type: String, required: true, trim: true },
    userID: { type: String, required: true, trim: true },
    startLocation: { type: String, required: true, trim: true },
    endLocation: { type: String, required: true, trim: true },
    charge: { type: Double, required: true, trim: true },
    tripDateTime: { type: Date, required: true, trim: true },
  },
  {
    timestamps: true,
  }
);

const Trip = mongoose.model("Trip", tripSchema);

//Export User
module.exports = Trip;
