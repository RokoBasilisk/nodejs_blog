const newsRouter = require("./news");
const siteRouter = require("./site");

function route(app) {
  app.use("/news", newsRouter);

  app.use("/", siteRouter);
  //   app.get('/search', (req, res) => {
  //     let { q } = req.query;
  //     console.log(q);
  //     res.render('search');
  //   });

  //   app.post('/search', (req, res) => {
  //     let { q, form_gender } = req.body;
  //     console.log(q, form_gender);
  //     console.log(req.body);
  //     res.render('search');
  //   });
}

module.exports = route;
