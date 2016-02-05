/**! MACHETE NEWS
* @Author  Juan Sebastián Beleño Díaz
* @Email   <jsbeleno@gmail.com>
* @version 0.1.0
*
* This controller will be the controller for the most of actions requiered 
* for  individual articles
**/

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Article = mongoose.model('Article');


/** 
* This controller function just show a limited number of articles depending
* on a POST parameter sended
**/
router.get('/list', function(req, res, next) {

	var OFFSET = req.body.offset;
	if(!OFFSET) OFFSET = 0;

	var LIMIT = 10;

	var articlesList = Article.find({}).sort({'pubDate': -1}).skip(OFFSET).limit(LIMIT);
	articlesList.exec(function(err, articles) {
		if (err) {
			res.json(
				{
					status: "BAD",
					msj: 	"In this moment it's not possible to get articles, sorry about that :("
				}
			);
		}else{
		  	res.json(
		  		{
		  			status: "OK",
		  			articles: articles
		  		}
		  	);
		}
	});
});

module.exports = router;
