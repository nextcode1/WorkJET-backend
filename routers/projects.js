const { Router } = require("express");
const router = new Router();
const Project = require("../models").project;
const User = require("../models").user;

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

// Add a project

router.post("/:id/project", async (req, res) => {
  const user = await User.findByPk(req.params.id);
  const { name, description, linkUrl } = req.body;

  if (!name) {
    return res.status(400).send({ message: "the project must have a name" });
  }

  const project = await Project.create({
    name,
    description,
    linkUrl,
    userId: user.id,
  });

  return res.status(201).send({ message: "Project created", project });
});

// delete one project
router.delete("/delete/:id", async (req, res) => {
  try {
    const oneProject = await Project.findByPk(req.params.id);
    if (!oneProject) {
      res.status(400).send(`Project ID ${oneProject} not found!`);
    } else {
      await oneProject.destroy();
      res.send({ message: "Project has been deleted", oneProject });
    }
  } catch (error) {
    res.send("Something went wrong");
  }
});

module.exports = router;
