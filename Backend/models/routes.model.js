const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Routes Model
const routesSchema = new Schema(
  {
    routeNo: { type: String, required: true, unique: true, trim: true },
    startLocation: { type: String, required: true, trim: true },
    endLocation: { type: String, required: true, trim: true },
  },
  {
    timestamps: true,
  }
);

const Routes = mongoose.model("Routes", routesSchema);

//Export User
module.exports = Routes;
