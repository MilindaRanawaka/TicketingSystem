const router = require("express").Router();
let Route = require("../models/fines.model");

//@route POST
//@desc Add New Route
router.route("/add").post((req, res) => {
    const routeNO = req.body.routeNO;
    const startLocation = req.body.startLocation;
    const endLocation = req.body.endLocation;
  
    const newRoute = new Route({
      routeNO,
      startLocation,
      endLocation
    });
  
    newRoute
      .save()
      .then(() => res.json("Route added!"))
      .catch((err) => res.status(400).json("Error: " + err));
  });

//@route GET
//@desc Get All Route
router.route("/").get((req, res) => {
  Route.find()
    .then((Route) => res.json(Route))
    .catch((err) => res.status(400).json("Error: " + err));
});