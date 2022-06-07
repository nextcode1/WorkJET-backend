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

// update skills
router.patch("/:id", async (req, res) => {
  try {
    const newSkills = await Skill.findByPk(req.params.id);
    const { name } = req.body;
    const updated = await newSkills.update({
      name,
    });
    return res.status(200).send(updated);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;
