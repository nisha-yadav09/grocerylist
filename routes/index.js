var express = require('express');
var router = express.Router();
const Groceries = require('../data/groceries');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Grocery List',  Groceries  });
});

router.post('/', function(req, res) {
   req.body.done = false;
   Groceries.push(req.body);
  res.redirect('/');
});

router.delete('/groceries/:id', function(req, res) {
  const idx = Groceries.find((g) => g.item === req.item);
  Groceries.splice(idx, 1);
  res.redirect('/');  
});

module.exports = router;
