const router = require("express").Router();
const { Page, User } = require("../models");
const { addPage, wikiPage } = require("../views");

router.get("/", async (req, res, next) => {
  res.send("get home path");
});

router.post("/", async (req, res, next) => {
  try {
    const page = await Page.create({
      title: req.body.title,
      content: req.body.content,
    });

    // const user = await User.create({

    // })

    res.redirect("/");
  } catch (error) {
    next(error);
  }
});

router.get("/add", async (req, res, next) => {
  res.send(addPage());
});

router.get("/:slug", async (req, res, next) => {
  try {
    const query = await Page.findOne({
      where: { slug: req.params.slug },
    });

    res.json(query);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
