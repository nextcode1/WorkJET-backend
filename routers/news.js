const { Router } = require("express");
const router = new Router();
const News = require("../models").new;

//  GET all news
router.get("/", async (req, res, next) => {
  try {
    const allNews = await News.findAll();
    res.status(200).send(allNews);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
