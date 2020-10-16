const router = require("express").Router();
let Credit = require("../models/credits.model");

//@route POST
//@desc Add Credit
router.route("/add").post((req, res) => {
  const userID = req.body.userID;
  const cardHolderName = req.body.cardHolderName;
  const cardNumber = req.body.cardNumber;
  const expireDate = req.body.expireDate;
  const cvvNumber = req.body.cvvNumber;
  const amount = req.body.amount;

  const newCredit = new Credit({
    userID,
    cardHolderName,
    cardNumber,
    expireDate,
    cvvNumber,
    amount
  });

  newCredit
      .save()
      .then((newCredit) => {
        res.status(200).json({ newCredit: "Credit is added successfully" });
      })
      .catch((err) => {
        res.status(400).send("unable to save to database");
      });
});

//@route GET
//@desc Get all Added Credit data
router.route("/").get((req, res) => {
  Credit.find()
      .then((credit) => res.json(credit))
      .catch((err) => res.status(400).json("Error: " + err));
});


//Export User Route
module.exports = router;
