const port = 3000;
const express = require("express");
const morgan = require("morgan");
const path = require("path");

//const views = require("./views");
const { db, Page, User } = require("./models");
const layout = require("./views/layout");

const app = express();

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));

db.authenticate().then(() => {
  console.log("connected to the database");
});

app.get("/", async (req, res, next) => {
  try {
    res.send(layout(""));
  } catch (error) {
    next(error);
  }
});

const init = async () => {
  await db.sync({ force: true });

  app.listen(port, () => {
    console.log(`App listening in port ${port}`);
  });
};

init();
