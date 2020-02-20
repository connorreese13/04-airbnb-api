const Houses = require("../models/houses");
const router = require("express").Router();

router.get("/", (req, res) => {
  console.log("hello");
  Houses.find({})
    .populate({
      path: "users",
      select: "name "
    })
    .then(houses => {
      console.log(houses);
      // Set first of images as 'image'
      res.send(houses);
    })
    .catch(err => {
      res.send(err);
    });
});

// Create route for single house

module.exports = router;
