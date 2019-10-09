const express = require("express");
const router = express.Router();
const burger = require("../models/burger");

router.get("/", (req, res) => {
  burger.selectAll(data => {
    let handlebarsObject = {
      burgers: data
    };
    res.render("index", handlebarsObject);
  });

  router.post("/add", (req, res) => {

    burger.create(req.body.burger_name, () => {
      res.redirect('/');
    });
  });
});

router.post('/eat/:id', (req, res) => {
  burger.update(req.params.id, () => {
    res.redirect('/');
  })
})

module.exports = router;
