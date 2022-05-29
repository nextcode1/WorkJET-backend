const { Router } = require("express");
const router = new Router();
const Recruter = require("../models").recruter;

//  GET all recruters
router.get("/", async (req, res, next) => {
  try {
    const recruters = await Recruter.findAll();
    res.status(200).send(recruters);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
