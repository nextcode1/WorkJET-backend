"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "news",
      [
        {
          title: "Galaxy Watch",
          imageUrl:
            "https://cdn.pocket-lint.com/r/s/970x/assets/images/145363-smartwatches-review-samsung-galaxy-watch-review-image1-d0tviqghyp-jpg.webp",
          description:
            "While the battery has gotten better - a four-day charge (only on the 46mm model) is impressive - it still lacks the functionality you'd expect from a smart wearable in 2022.",
          linkUrl:
            "https://www.pocket-lint.com/nl-nl/smartwatches/reviews/samsung/145363-samsung-galaxy-watch-recensie",
          date: "3 hours",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "TypeScript 4.7",
          imageUrl:
            "https://www.freecodecamp.org/news/content/images/size/w2000/2019/07/ts-1.png",
          description:
            "TypeScript 4.7 became generally available as a production release on May 24. The latest version of Microsoft's strongly typed JavaScript, TypeScript 4.7 arrives with ECMAScript module (ESM) support for Node.js 16.",
          linkUrl:
            "https://www.infoworld.com/article/3656801/typescript-47-crosses-the-finish-line.html",
          date: "2 hours",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "16-inch MacBook Pro",
          imageUrl:
            "https://photos5.appleinsider.com/gallery/product_pages/122-hero.jpg?=1653837383",
          description:
            "The 16-inch MacBook Pro with custom Apple Silicon is the most powerful portable Mac ever introduced by Apple. It houses the M1 Pro or M1 Max processor, multiple ports, ProMotion and a notched display. ",
          linkUrl: "https://appleinsider.com/inside/16-inch-macbook-pro",
          date: "12 hours",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Redux Toolkit",
          imageUrl:
            "https://www.freecodecamp.org/news/content/images/size/w2000/2022/04/reduxtoolkit.png",
          description:
            "Takes inspiration from libraries like Immer and Autodux to let you write 'mutative' immutable update logic, and even create entire 'slices' of state automatically.",
          linkUrl: "https://redux-toolkit.js.org",
          date: "22 hours",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Bitcoin's Price Estimate by Crypto Fund Managers ",
          imageUrl:
            "https://static.news.bitcoin.com/wp-content/uploads/2022/06/pwc-btc.jpg",
          description:
            "PWC: Majority of Crypto Fund Managers Surveyed Predict Bitcoin Could Reach $100K by Year-End.",
          linkUrl:
            "https://news.bitcoin.com/pwc-majority-of-crypto-fund-managers-surveyed-predict-bitcoin-could-reach-100k-by-year-end/",
          date: "1 hour",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title:
            "Top NFT Collections See Price Crash Amid Crypto Market Panic ",
          imageUrl:
            "https://v2.cimg.co/news/81064/205607/webp-net-resizeimage1-min.jpg",
          description:
            "The floor prices of some of the top non-fungible token (NFT) collections are crashing in the market, both in ethereum (ETH) and US dollar terms.",
          linkUrl:
            "https://cryptonews.com/news/top-nft-collections-see-price-crash-amid-crypto-market-panic.htm",
          date: "30 Min",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Social Media Attack",
          imageUrl:
            "https://v2.cimg.co/news/81037/205577/responsive-images/adobestock-skorzewiak-1-1___media_library_original_1200_808.jpg",
          description:
            "Justin Taylor, Head of Consumer Product Marketing at Twitter, has questioned claims by Yuga Labs co-founder Gordon Goner that the project's social media accounts encounter a possible attack that would involve an insider at Twitter.",
          linkUrl:
            "https://cryptonews.com/news/twitters-head-of-marketing-denies-claims-by-yuga-labs-co-founder-about-a-social-media-attack.htm",
          date: "30 Min",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("news", null, {});
  },
};
