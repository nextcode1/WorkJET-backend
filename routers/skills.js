const { Router } = require("express");
const router = new Router();
const Skill = require("../models").skill;
const User = require("../models").user;

//  GET all skills
router.get("/", async (req, res, next) => {
  const limit = req.query.limit || 20;
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

// update skills
// router.post("/new", async (req, res) => {
//   try {
//     const newSkills = await Skill.findByPk(req.params.id);
//     const { name } = req.body;
//     const updated = await newSkills.crate({
//       name,
//     });
//     return res.status(200).send(updated);
//   } catch (e) {
//     console.log(e.message);
//     next(e);
//   }
// });

router.post("/skill", async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).send({ message: "the skill must have a name" });
  }

  const skill = await Skill.create({
    name,
  });

  return res.status(201).send({ message: "Skill created", skill });
});
module.exports = router;
