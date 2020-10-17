const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Trip Model
const tripSchema = new Schema(
  {
    routeID: { type: String, required: true, trim: true },
    routeNo: { type: String, trim: true },
    busID: { type: String, required: true, trim: true },
    busRegNo: { type: String, trim: true },
    userID: { type: String, required: true, trim: true },
    userName: { type: String, trim: true },
    startLocation: { type: String, required: true, trim: true },
    endLocation: { type: String, required: true, trim: true },
    charge: { type: Number, required: true, trim: true },
    distance: { type: String, required: true, trim: true },
    tripDateTime: { type: Date, required: true, trim: true },
  },
  {
    timestamps: true,
  }
);

const Trip = mongoose.model("Trip", tripSchema);

//Export User
module.exports = Trip;
