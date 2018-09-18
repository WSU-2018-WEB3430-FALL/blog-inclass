var express = require('express');
var router = express.Router();

let posts = require('../models/data');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('posts', { title: 'My Blog', posts });
});

module.exports = router;
