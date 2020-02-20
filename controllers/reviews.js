const Reviews = require("../models/reviews");
const router = require("express").Router();

router.get("/", (req, res) => {
  Reviews.find({})
    .populate("author")
    .then(response => {
      res.send(response);
    })
    .catch(err => {
      res.send(err);
    });
});

module.exports = router;
