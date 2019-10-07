const express = require("express");
const router = express.Router();
const burger = require("../models/burger");

router.get("/", (req, res) => {
  burger.selectAll(data => {
    let handlebarsObject = {
      burgers: data
    };
    console.log(handlebarsObject);
    res.render("index", handlebarsObject);
  });

  router.post("/add", (req, res) => {
    console.log(req.body);

    burger.create(req.body.burger_name, () => {
      res.send(req.body);
    });
  });
});

router.post('/eat/:id', (req, res) => {
  burger.update(req.params.id, () => {
    res.send(req.params.id)
  })
})

module.exports = router;
