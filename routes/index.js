var express = require('express');
var router = express.Router();
const groceries = require('../data/groceries');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Grocery List',  groceries  });
});

router.post('/', function(req, res) {
   req.body.done = false;
   groceries.push(req.body);
  res.redirect('/');
});


module.exports = router;
