const Types = require("../models/types");
const router = require("express").Router();
router.get("/", (req, res) => {
  Types.find({}).then(response => {
    res.send(response);
  });
});
module.exports = router;
