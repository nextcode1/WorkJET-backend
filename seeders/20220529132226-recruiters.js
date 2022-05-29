"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "recruters",
      [
        {
          name: "Marian",
          email: "m@m.com",
          location: "Amsterdam",
          imageUrl: "http://sadasfas",
          isRecruting: true,
          password: bcrypt.hashSync("m", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("recruters", null, {});
  },
};
