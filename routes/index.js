var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Página Inicial' });
});

router.get('/new', function(req, res, nex) {
  res.render('new', { title: 'Página New' });
});

module.exports = router;
