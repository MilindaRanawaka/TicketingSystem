const router = require("express").Router();
let Fine = require("../models/fines.model");

//@route POST
//@desc Add New Fine
router.route("/add").post((req, res) => {
    const userID = req.body.userID;
    const tripID = req.body.tripID;
    const Fine = req.body.fine;
  
    const newFine = new Fine({
      userID,
      tripID,
      Fine
    });
  
    newFine
      .save()
      .then(() => res.json("Fine added!"))
      .catch((err) => res.status(400).json("Error: " + err));
  });

//@route GET
//@desc Get All Fine
router.route("/").get((req, res) => {
  Fine.find()
    .then((Fine) => res.json(Fine))
    .catch((err) => res.status(400).json("Error: " + err));
});