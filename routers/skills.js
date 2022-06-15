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

module.exports = router;
