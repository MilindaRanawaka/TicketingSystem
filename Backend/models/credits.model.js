const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Credit Model
const creditSchema = new Schema(
  {
      userID: { type: String, required: true, trim: true },
      cardHolderName: { type: String, required: true, trim: true },
      cardNumber: { type: String, required: true, trim: true },
      expireDate: { type: String, required: true, trim: true },
      cvvNumber: { type: String, required: true, trim: true },
      amount: { type: Number, required: true, trim: true },
  },
  {
    timestamps: true,
  }
);

const Credit = mongoose.model("Credit", creditSchema);

//Export Credit
module.exports = Credit;
