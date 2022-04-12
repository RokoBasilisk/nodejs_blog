const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const path = require("path");

const route = require("./routes");

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

//Route Initialize
route(app);

app.listen(port, () => console.log(`Server is running on port ${port}`));
