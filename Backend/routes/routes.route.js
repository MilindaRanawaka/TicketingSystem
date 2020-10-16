const router = require("express").Router();
let Route = require("../models/routes.model");

//@route POST
//@desc Add New Route
router.route("/add").post((req, res) => {
  const routeNo = req.body.routeNo;
  const startLocation = req.body.startLocation;
  const endLocation = req.body.endLocation;

  const newRoute = new Route({
    routeNo,
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

//@route GET
//@desc Get Specific Route Using ID
router.route("/:id").get((req, res) => {
  Route.findById(req.params.id)
    .then((Route) => res.json(Route))
    .catch((err) => res.status(400).json("Error: " + err));
});

//@route DELETE
//@desc Delete Specific Route Using ID
router.route("/:id").delete((req, res) => {
  Route.findByIdAndDelete(req.params.id)
    .then(() => res.json("Route deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});


//Export User Route
module.exports = router;