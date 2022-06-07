"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "certifications",
      [
        {
          title: "FullStack Developer",
          date: "17-06-2022",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Network Administrator",
          date: "09-01-2022",
          userId: 2,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Comptia A+",
          date: "10-09-2021",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Software developer",
          date: "10-02-2021",
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Software engineer",
          date: "10-12-2021",
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("certifications", null, {});
  },
};
