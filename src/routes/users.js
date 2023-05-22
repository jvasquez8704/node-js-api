var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.json({messaje:'Vamos Olancho FC.', code:200, result:"ok" });
});

module.exports = router;
