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
            "https://www.cnet.com/a/img/resize/bcbb35920633f8c87106ae40f487857bb0f567da/2021/11/19/ffc31f0e-a80b-43ee-a749-19810e327a06/bored-apes-better.jpg?auto=webp&fit=crop&height=675&width=1200",
          isAvailable: true,
          description:
            "My name is Vali Willer. I graduated from MIT a month ago. Now, I am looking for my first full-time job. I have been working as a freelance web developer for the last three years and cooperated with several startups. I cannot say with 100% confidence where I see myself in five years or what my big career goal is. The world is changing rapidly, and I don't have enough professional experience to be certain about such things. However, I know that I can provide a fresh take and an extraordinary approach to every project. I am always open to challenges and constructive feedback. I am open-minded and learn new things quickly. I want to become a team player and dedicate all my skills and talents to develop high-quality and unique products.",
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
          description:
            " I am a talented, ambitious and hardworking individual, with broad skills and experience in digital and printed marketing, social media and leading projects.Furthermore, I am adept at handling multiple tasks on a daily basis competently and at working well under pressure.A key strength is communication; building strong relationships with people in order to deliver the best results.Recently, I completed an Open degree, including Business and Design modules at the Open University and I am now fully employed by Clearly Presented as a Digital Media Manager.",
          password: bcrypt.hashSync("b", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Steven Miller",
          email: "s@s.com",
          location: "Amsterdam",
          imageUrl:
            "https://forkast.news/wp-content/uploads/2022/03/NFT-Avatar.png",
          isAvailable: true,
          description:
            "I am Steven Miller, and I am looking for a job in Customer Services. I have 10 years of experience in related job positions. I started working as a Customer Care Agent in a call center gradually moving to a Customer Experience Analyst. I am a team player. I am outgoing, dedicated, and open-minded. I get across to people and adjust to changes with ease. I believe that a person should work on developing their professional skills and learning new things all the time. Currently, I am looking for new career opportunities my current job position cannot provide. I have enough experience to occupy a managing position and I will be glad to work on increasing the customer loyalty rate of your company.",
          password: bcrypt.hashSync("s", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Justin Baker",
          email: "j@j.com",
          location: "Amsterdam",
          imageUrl:
            "https://qph.cf2.quoracdn.net/main-qimg-77813e981110517db9c86434f48431a1-pjlq",
          isAvailable: true,
          description:
            "My name is Justin Baker, and I decided to change my occupation after five years of working in sales. I still like communicating with people and work in a team. I want to alter the accents a bit and switch to product management. As a sales agent, I learned what makes a product valuable and easy to sell besides promotion and persuasiveness. I have been working “on the other side” long enough to realize how important marketing and development components are. I have become interested in these fields recently. I am certain that joining your team is a benefit for both sides. My professional expertise in sales can provide valuable insights and a fresh perspective on product development. Personally, I can acquire new knowledge and skills in product launch and management. I am ready for long-time cooperation.",
          password: bcrypt.hashSync("j", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Rober Bruce",
          email: "r@r.com",
          location: "Amsterdam",
          imageUrl:
            "https://previews.123rf.com/images/goodluz/goodluz1306/goodluz130600359/20191496-handsome-guy-working-with-tablet-in-office.jpg",
          isAvailable: true,
          description:
            "Entry-level market research analyst with proven problem solving, research, and analytical skills. Interned at McKinnel Consulting where I prepared feasibility analysis for building Software Technology Parks across South Asian nations. Honors Degree in Economics from Nashville Community College (summa cum laude). Seeking a Market Research Analyst position to grow my career as a consulting professional.",
          password: bcrypt.hashSync("r", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Vladimir Cage",
          email: "v@v.com",
          location: "Amsterdam",
          imageUrl: "https://s3.envato.com/files/307710225/374_E39A3406.jpg",
          isAvailable: true,
          description:
            "Engaging high school teacher with 12+ years of experience instructing high school students at Summer Valley High, California. Received 95%+ satisfaction rating from parents and students for each of those years. Improved math and physics grades by over 20% during this period. Seeking a role as a Vice Principal to continue my passion for nurturing young minds.",
          password: bcrypt.hashSync("r", SALT_ROUNDS),
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
