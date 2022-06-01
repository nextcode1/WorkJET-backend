"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "recruters",
      [
        {
          name: "Marian ",
          email: "m@m.com",
          location: "Amsterdam",
          imageUrl:
            "https://doit.software/wp-content/uploads/2021/04/Technical-Recruiter-Skills-and-Competencies.jpg",
          isRecruting: true,
          jobTitle: "Tech Recruiter",
          jobDescription:
            "You have at least two years of experience as a corporate IT/tech recruiter, aimed at developers/engineers. We therefore call on candidates with a diverse background in the broadest sense of the word to apply for this position.",
          password: bcrypt.hashSync("m", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Apple",
          email: "j@n.com",
          location: "Amsterdam",
          imageUrl:
            "https://npokennis.nl/json-api/bundles/thumbs/i/18000/mod_media_image/18452.w1440.2c3c829.980564c.jpg",
          isRecruting: true,
          jobTitle: "Frontend Developer",
          jobDescription:
            "As a T-Shaped Frontend Developer you will work with the next generation payments and wearables, such as Garmin, Fitbit and Mobile Wallet. The DevOps team are focus on  optimizing customer relationships through digital channels.",
          password: bcrypt.hashSync("aa", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Digital Green",
          email: "d@d.com",
          location: "Amsterdam",
          imageUrl:
            "https://en.ecomondo.com/website/var/tmp/image-thumbnails/60000/65807/thumb__content/dgw_slider_eco.jpeg",
          isRecruting: true,
          jobTitle: "Senior Python Developer",
          jobDescription:
            "To name a few, we make use of PySpark, SQL, Pandas, MLFlow, Scikit-learn, Keras and PyTorch to build our models and deploy them as applications with Postgres, FastAPI, Elasticbeanstalk, S3 and Lambda.",
          password: bcrypt.hashSync("ssd", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Q42",
          email: "q@q.com",
          location: "Amsterdam",
          imageUrl:
            "https://images.prismic.io/q42-site/1c55eefd042678357102abd55b146a433a7834f6_q42-logo-big.png?auto=compress,format",
          isRecruting: false,
          jobTitle: "iOS developer",
          jobDescription:
            "We make apps, websites, connected devices, speech assistants, games, robots, AI and VR applications.We therefore find it even more fun to program in such a way that our work is not only useful, but also friendly.",
          password: bcrypt.hashSync("mw", SALT_ROUNDS),
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
