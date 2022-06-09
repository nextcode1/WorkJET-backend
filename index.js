const express = require("express");
const corsMiddleWare = require("cors");
const nodemailer = require("nodemailer");

const authMiddleWare = require("./auth/middleware");
const usersRouter = require("./routers/users");
const skillsRouter = require("./routers/skills");
const projectsRouter = require("./routers/projects");
const recrutersRouter = require("./routers/recruters");
const certificationsRouter = require("./routers/certifications");
const newsRouter = require("./routers/news");
const mailRouter = require("./routers/mail");

const { PORT } = require("./config/constants");

const app = express();
app.use(express.json());

app.use(corsMiddleWare());

app.use("/users", usersRouter);
app.use("/news", newsRouter);
app.use("/mails", mailRouter);
app.use("/skills", skillsRouter);
app.use("/projects", projectsRouter);
app.use("/recruiters", recrutersRouter);
app.use("/certifications", certificationsRouter);

const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);

const contactEmail = nodemailer.createTransport({
  service: "outlook",
  auth: {
    user: "marian_project@outlook.com",
    pass: "evolution77J",
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

app.post("/contact", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const subject = req.body.subject;
  const message = req.body.message;
  // if (!name || !email || !subject || !message) {
  //   return res.status(400).send({ message: "Please fill all the fields" });
  // }
  const mail = {
    from: name,
    to: "marian_project@outlook.com",
    subject: "Contact Form Submission",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>
           <p>Subject:${subject}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});

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
