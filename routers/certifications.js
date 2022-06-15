const { Router } = require("express");
const { user } = require("pg/lib/defaults");
const router = new Router();
const Certification = require("../models").certification;
const User = require("../models").user;

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

// Post a new certification
router.post("/:id/certification", async (req, res) => {
  const user = await User.findByPk(req.params.id);
  const { title, date } = req.body;

  if (!title) {
    return res
      .status(400)
      .send({ message: "the certification must have a title" });
  }

  const certification = await Certification.create({
    title,
    date,
    userId: user.id,
  });

  return res
    .status(201)
    .send({ message: "Certification created", certification });
});

// delete a certif
router.delete("/delete/:id", async (req, res) => {
  try {
    const oneCert = await Certification.findByPk(req.params.id);
    if (!oneCert) {
      res.status(400).send(`Certification ID ${oneCert} not found!`);
    } else {
      await oneCert.destroy();
      res.send({ message: "Certification has been deleted", oneCert });
    }
  } catch (error) {
    res.send("Something went wrong");
  }
});

module.exports = router;
