var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  res.render('index', { title: req.body.id1 });
});

module.exports = router;
