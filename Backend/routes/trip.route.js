const router = require("express").Router();
let Trip = require("../models/trip.model");

//@route POST
//@desc Add New Trip
router.route("/add").post((req, res) => {

  const routeID = req.body.routeID;
  const routeNo = req.body.routeNo;
  const busID = req.body.busID;
  const busRegNo = req.body.busRegNo;
  const userID = req.body.userID;
  const userName = req.body.userName;
  const startLocation = req.body.startLocation;
  const endLocation = req.body.endLocation;
  const charge = req.body.charge;
  const distance = req.body.distance;
  const tripDateTime = req.body.tripDateTime;

  const newTrip = new Trip({
    routeID,
    routeNo,
    busID,
    busRegNo,
    userID,
    userName,
    startLocation,
    endLocation,
    charge,
    distance,
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