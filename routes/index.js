/**! MACHETE NEWS
* @Author  Juan Sebastián Beleño Díaz
* @Email   <jsbeleno@gmail.com>
* @version 0.1.0
*
* This controller will be for the front-end part of this project
**/
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
