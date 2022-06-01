const bcrypt = require("bcrypt");
const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const auth = require("../auth/middleware");
const { SALT_ROUNDS } = require("../config/constants");
const User = require("../models").user;
const Skill = require("../models").skill;
const Project = require("../models").project;
const Certification = require("../models").certification;

const router = new Router();

// The /me endpoint can be used to:
// - get the users email & name using only their token
// - checking if a token is (still) valid
// router.get("/me", auth, async (req, res) => {
//   // const user = req.user;
//   try {
//     const user = await User.findByPk(req.user.id, {
//       // include: [{ model: Reservation, include: [Table] }],
//     });
//     // don't send back the password hash
//     delete user.dataValues["password"];
//     res.status(200).send({
//       user,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send("Something went wrong");
//   }
// });

router.get("/", async (req, res) => {
  try {
    const getUsers = await User.findAll({
      include: [{ model: Project }, { model: Skill }, { model: Certification }],
    });
    console.log("here");

    res.send(getUsers);

    // res.send("hello there");
  } catch (error) {
    console.log(error);
    return res.status(400).send("Something went wrong");
  }
});

// CREATE A USER

router.post("/signup", async (req, res) => {
  const { email, password, name } = req.body;
  if (!email || !password || !name) {
    return res.status(400).send("Please provide an email, password and a name");
  }

  try {
    const newUser = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, SALT_ROUNDS),
    });

    delete newUser.dataValues["password"];

    const token = toJWT({ userId: newUser.id });

    res.status(201).json({ token, user: newUser.dataValues });
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
module.exports = router;
