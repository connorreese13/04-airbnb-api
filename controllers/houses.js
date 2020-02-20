const Houses = require("../models/houses");
const router = require("express").Router();

router.get("/", (req, res) => {
  Houses.find(req.query)
    .populate("type")
    .select(
      "images rating bedrooms guests bathroom title price city region type"
    )
    .lean()
    .then(houses => {
      let array = houses.map(house => {
        house.image = house.images[0];
        delete house.images;
        return house;
      });
      res.send(array);
    })
    .catch(err => {
      res.send(err);
    });
});

router.get("/:id", (req, res) => {
  console.log("hello");
  Houses.find({ _id: req.params.id })
    .populate("type")
    .then(houses => {
      console.log();
      // Set first of images as 'image'
      res.send(houses);
    })
    .catch(err => {
      res.send(err);
    });
});

// Create route for single house

module.exports = router;
