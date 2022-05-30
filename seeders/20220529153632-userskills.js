"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "userSkills",
      [
        {
          userId: 1,
          skillId: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          skillId: 42,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          skillId: 133,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          skillId: 168,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          skillId: 163,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          skillId: 157,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          skillId: 171,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          skillId: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          skillId: 113,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          skillId: 111,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("userSkills", null, {});
  },
};
