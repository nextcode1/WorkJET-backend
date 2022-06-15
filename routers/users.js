const bcrypt = require("bcrypt");
const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const auth = require("../auth/middleware");
const { SALT_ROUNDS } = require("../config/constants");
const User = require("../models").user;
const Skill = require("../models").skill;
const Project = require("../models").project;
const Certification = require("../models").certification;
const Recruter = require("../models").recruter;
const UserSkill = require("../models").userSkill;

const router = new Router();

router.get("/me", auth, async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id, {
      include: [{ model: Project }, { model: Skill }, { model: Certification }],
    });
    delete user.dataValues["password"];
    res.status(200).send({
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong");
  }
});

// Get all users
router.get("/", async (req, res) => {
  try {
    const getUsers = await User.findAll({
      include: [{ model: Project }, { model: Skill }, { model: Certification }],
    });

    res.send(getUsers);
  } catch (error) {
    console.log(error);
    return res.status(400).send("Something went wrong");
  }
});

// Signup END-POINT

router.post("/signup", async (req, res) => {
  const { email, password, name, isRecruiter } = req.body;
  if (!email || !password || !name) {
    return res.status(400).send("Please provide an email, password and a name");
  }

  try {
    if (isRecruiter) {
      const newRecruiter = await Recruter.create({
        name,
        email,
        password: bcrypt.hashSync(password, SALT_ROUNDS),
      });
      delete newRecruiter.dataValues["password"];
      const token = toJWT({
        recruiterId: newRecruiter.id,
      });
      res.status(201).json({
        token,
        recruiter: newRecruiter.dataValues,
      });
    } else {
      const newUser = await User.create({
        name,
        email,
        password: bcrypt.hashSync(password, SALT_ROUNDS),
      });

      delete newUser.dataValues["password"];

      const token = toJWT({ userId: newUser.id });

      res.status(201).json({
        token,
        user: newUser.dataValues,
      });
    }
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res
        .status(400)
        .send({ message: "There is an existing account with this email" });
    }

    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

// LOGIN END-POINT
router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .send({ message: "Please provide both email and password" });
    }

    const user = await User.findOne({
      where: { email },
      include: [{ model: Project }, { model: Skill }, { model: Certification }],
    });

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(400).send({
        message: "User with that email not found or password incorrect",
      });
    }

    delete user.dataValues["password"];
    const token = toJWT({ userId: user.id });
    return res.status(200).send({ token, user: user.dataValues });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

// Post a new skill

router.post("/:id/skill", async (req, res) => {
  const { id } = req.params;
  const { skills, extraSkill } = req.body;

  const newskills = skills;

  let newSkill;
  if (extraSkill) {
    newSkill = await Skill.create({ name: extraSkill });
    const newSkills = await UserSkill.create({
      userId: id,
      skillId: newSkill.id,
    });
  }

  const addSkills = newskills.map(async (item) => {
    const newSkills = await UserSkill.create({ userId: id, skillId: item });
    return newSkills;
  });

  await Promise.all(addSkills);

  const updatedSkills = extraSkill ? [...newskills, newSkill.id] : newskills;

  return res
    .status(201)
    .send({ message: "Skill created", newskills: updatedSkills });
});

// Update user profile
router.put("/:id/user", async (req, res) => {
  const user = await User.findByPk(req.params.id);
  const {
    name,
    email,
    password,
    location,
    description,
    imageUrl,
    isAvailable,
  } = req.body;

  if (!name) {
    return res.status(400).send({ message: "User must have a name" });
  }

  const updated = await user.update({
    name,
    email,
    password,
    location,
    description,
    imageUrl,
    isAvailable,
    userId: user.id,
  });

  return res.status(201).send({ message: "User updated", updated });
});

module.exports = router;
