var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  
  res.send('response from app1' + req.body);
});

router.post('/test', function (req, res, next) {
	//res.send('response from app1 - ' + req.param('id1') + req.param('id2'));
	res.send('<h1>App2</h1>response from app1 - <p><p>Value1: ' + req.body.id1 + '<p><p>Value2: ' + req.body.id2);
	console.log("id1: " + req.body.id1 + " id2: " + req.body.id2);
	
  //console.log('Request Type:', req.method)
  //next()
})

module.exports = router;
