const { Router } = require("express");
const router = new Router();
const Certification = require("../models").certification;

//  GET all certifications
router.get("/", async (req, res, next) => {
  try {
    const cert = await Certification.findAll();
    res.status(200).send(cert);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
