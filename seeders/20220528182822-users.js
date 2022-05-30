"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "vali",
          email: "a@a.com",
          location: "Amsterdam",
          imageUrl:
            "https://www.pavilionweb.com/wp-content/uploads/2017/03/man.png",
          isAvailable: true,
          description: "Hi I'm Vali",
          password: bcrypt.hashSync("a", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ib",
          email: "b@b.com",
          location: "Amsterdam",
          imageUrl:
            "https://i.etsystatic.com/24467115/r/il/95ac03/2830759918/il_1588xN.2830759918_mdak.jpg",
          isAvailable: true,
          description: "Hi I'm Cris",
          password: bcrypt.hashSync("b", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
