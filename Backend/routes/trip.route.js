const router = require("express").Router();
let Trip = require("../models/fines.model");

//@route POST
//@desc Add New Trip
router.route("/add").post((req, res) => {

    const routeID = req.body.routeID;
    const userID = req.body.userID;
    const startLocation = req.body.startLocation;
    const endLocation = req.body.endLocation;
    const charge = req.body.charge;
    const tripDateTime = req.body.tripDateTime;
  
    const newTrip = new Trip({
        routeID,
        userID,
        startLocation,
        endLocation,
        charge,
        tripDateTime
    });
  
    newTrip
      .save()
      .then(() => res.json("Trip added!"))
      .catch((err) => res.status(400).json("Error: " + err));
  });