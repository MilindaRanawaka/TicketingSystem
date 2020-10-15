const router = require("express").Router();
let Trip = require("../models/fines.model");

//@route POST
//@desc Add New Trip
router.route("/add").post((req, res) => {

  const routeID = req.body.routeID;
  const busID = req.body.busID;
  const userID = req.body.userID;
  const startLocation = req.body.startLocation;
  const endLocation = req.body.endLocation;
  const charge = req.body.charge;
  const tripDateTime = req.body.tripDateTime;

  const newTrip = new Trip({
    routeID,
    busID,
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

//@route GET
//@desc Get All Trip
router.route("/").get((req, res) => {
  Trip.find()
    .then((Trip) => res.json(Trip))
    .catch((err) => res.status(400).json("Error: " + err));
});

//@route GET
//@desc Get Specific Trip Using ID
router.route("/:id").get((req, res) => {
  Trip.findById(req.params.id)
    .then((Trip) => res.json(Trip))
    .catch((err) => res.status(400).json("Error: " + err));
});

//@route DELETE
//@desc Delete Specific Trip Using ID
router.route("/:id").delete((req, res) => {
  Trip.findByIdAndDelete(req.params.id)
    .then(() => res.json("Trip deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

//Export User Route
module.exports = router;