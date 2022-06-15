const { Router } = require("express");
const router = new Router();
const Skill = require("../models").skill;
const User = require("../models").user;

//  GET all skills
router.get("/", async (req, res, next) => {
  const limit = req.query.limit || 10;
  const offset = req.query.offset || 0;
  try {
    const skills = await Skill.findAndCountAll({
      limit,
      offset,
    });
    res.status(200).send({ rows: skills.rows, total: skills.count });
  } catch (error) {
    console.log(error);
    next(error);
  }
});
// delete a skill
router.delete("/delete/:id", async (req, res) => {
  try {
    const talent = await Skill.findByPk(req.params.id);
    if (!talent) {
      res.status(400).send(`Skill ID ${talent} not found!`);
    } else {
      await talent.destroy();
      res.send({ message: "Skill has been deleted", talent });
    }
  } catch (error) {
    res.send("Something went wrong");
  }
});

module.exports = router;
