const router = require("express").Router();
let Bus = require("../models/buses.model");

//@route POST
//@desc Add New Bus
router.route("/add").post((req, res) => {
    const regNo = req.body.regNo;
    const driverName = req.body.driverName;
    const capacity = req.body.capacity;
  
    const newBus = new Bus({
      regNo,
      driverName,
      capacity
    });
  
    newBus
      .save()
      .then(() => res.json("Bus added!"))
      .catch((err) => res.status(400).json("Error: " + err));
  });