const Amenities = require("../models/amenities");
const router = require("express").Router();

router.get("/", (req, res) => {
  Amenities.find().then(response => {
    res.send(response);
  });
});

module.exports = router;
