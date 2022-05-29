const { Router } = require("express");
const router = new Router();
const Skill = require("../models").skill;

//  GET all skills
router.get("/", async (req, res, next) => {
  try {
    const skills = await Skill.findAll();
    res.status(200).send(skills);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
