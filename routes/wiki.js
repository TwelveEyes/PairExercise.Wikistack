const router = require("express").Router();
const { addPage } = require("../views");

router.get("/", async (req, res, next) => {
  res.send("get home path");
});
router.post("/", async (req, res, next) => {
  res.json(req.body);
});
router.get("/add", async (req, res, next) => {
  res.send(addPage());
});

module.exports = router;
