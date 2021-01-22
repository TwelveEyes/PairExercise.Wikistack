const port = 50000;
const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res, next) => {
  try {
    res.send("hello world");
  } catch (error) {
    next(error);
  }
});

app.listen(port, () => {
  console.log(`App listening in port ${port}`);
});
