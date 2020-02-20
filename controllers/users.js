const Users = require("../models/users");
const router = require("express").Router();

router.get("/", (req, res) => {
  console.log("hello");
  Users.find({})
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
