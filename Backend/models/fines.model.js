const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Fines Model
const fineSchema = new Schema(
  {
    userID: { type: String, required: true, trim: true },
    tripID: { type: String, required: true, trim: true },
    Fine: { type: Number, required: true, trim: true },
    paidOrNot: { type: Boolean, required: true, trim: true },
  },
  {
    timestamps: true,
  }
);

const Fine = mongoose.model("Fine", fineSchema);

//Export User
module.exports = Fine;