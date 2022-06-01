const express = require("express");
const corsMiddleWare = require("cors");

const authMiddleWare = require("./auth/middleware");
const usersRouter = require("./routers/users");
const skillsRouter = require("./routers/skills");
const projectsRouter = require("./routers/projects");
const recrutersRouter = require("./routers/recruters");
const certificationsRouter = require("./routers/certifications");
const newsRouter = require("./routers/news");

const { PORT } = require("./config/constants");

const app = express();
app.use(express.json());

app.use(corsMiddleWare());

app.use("/users", usersRouter);
app.use("/news", newsRouter);
app.use("/skills", skillsRouter);
app.use("/projects", projectsRouter);
app.use("/recruiters", recrutersRouter);
app.use("/certifications", certificationsRouter);

const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);

app.post("/authorized_post_request", authMiddleWare, (req, res) => {
  const user = req.user;
  delete user.dataValues["password"];

  res.json({
    youPosted: {
      ...req.body,
    },
    userFoundWithToken: {
      ...user.dataValues,
    },
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
