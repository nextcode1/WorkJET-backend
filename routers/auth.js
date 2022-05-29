const bcrypt = require("bcrypt");
const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const auth = require("../auth/middleware");
const { SALT_ROUNDS } = require("../config/constants");
const router = new Router();
const User = require("../models").user;

router.get("/", async (req, res) => {
  try {
    const getUsers = await User.findAll();
    res.send(getUsers);
  } catch (error) {
    console.log(error);
    return res.status(400).send("Something went wrong");
  }
});

// The /me endpoint can be used to:
// - get the users email & name using only their token
// - checking if a token is (still) valid
router.get("/me", auth, async (req, res) => {
  // const user = req.user;
  try {
    const user = await User.findByPk(req.user.id, {
      // include: [{ model: Reservation, include: [Table] }],
    });
    // don't send back the password hash
    delete user.dataValues["password"];
    res.status(200).send({
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong");
  }
});

module.exports = router;
