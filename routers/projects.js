const { Router } = require("express");
const router = new Router();
const Project = require("../models").project;

//  GET all projects
router.get("/", async (req, res, next) => {
  try {
    const projects = await Project.findAll();
    res.status(200).send(projects);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
