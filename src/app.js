const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const path = require("path");
const app = express();
const port = 5000;

// Morgan
app.use(morgan("tiny"));

// json parse
app.use(
  express.urlencoded({
    extended: true,
  })
);

//access to static folder/file
app.use(express.static(path.join(__dirname, "public")));

//Template engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/search", (req, res) => {
  let { q } = req.query;
  console.log(q);
  res.render("search");
});

app.post("/search", (req, res) => {
  let { q, form_gender } = req.body;
  console.log(q, form_gender);
  console.log(req.body);
  res.render("search");
});

app.get("/news", (req, res) => {
  res.render("news");
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
