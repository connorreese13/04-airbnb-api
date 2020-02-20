const Amenities = require("../models/amenities");
const router = require("express").Router();

router.get("/", (req, res) => {
  console.log("hello");
  Amenities.find({})
    .populate({
      path: "amenities",
      select: "name"
    })
    .then(amenities => {
      console.log(amenities);
      // Set first of images as 'image'
      res.send(amenities);
    })
    .catch(err => {
      res.send(err);
    });
});

module.exports = router;
