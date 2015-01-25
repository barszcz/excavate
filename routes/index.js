var express = require('express');
var router = express.Router();
var mta = require('mta')();

/* GET home page. */
router.get('/', function(req, res, next) {
  mta.status('subway', function(err, status){
  if (err) throw err;
  console.log(status);
  res.render('index', {title: 'Excavate', status: status} );
  });
});

module.exports = router;
