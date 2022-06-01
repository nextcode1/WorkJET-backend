"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "projects",
      [
        {
          name: "score-board",
          description: "increse score for players",
          linkUrl: "http://nothingfor-now",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "E-comerce Shop",
          description:
            "here you can buy anything you don't need and not feel bad about! ",
          linkUrl: "http://nothingfor-now",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "redux-counter",
          description: "increse counter ",
          linkUrl:
            "https://github.com/reduxjs/redux-essentials-counter-example",
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "facebook-redux",
          description:
            "The main purpose of this repository is to continue evolving React core, making it faster and easier to use. Development of React happens in the open on GitHub, and we are grateful to the community for contributing bugfixes and improvements. Read below to learn how you can take part in improving React. ",
          linkUrl: "https://github.com/facebook/react",
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("projects", null, {});
  },
};
