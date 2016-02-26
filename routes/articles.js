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
var striptags = require('striptags');
var mongoose = require('mongoose');
var Article = mongoose.model('Article');


/** 
* This controller function just show a limited number of articles depending
* on a POST parameter sended
**/
router.post('/list', function(req, res, next) {

	var OFFSET = req.body.offset;
	if(!OFFSET) OFFSET = 0;

	var TAG = req.body.tag;
	if(!TAG) TAG = "Esportes";

	var LIMIT = 10;

	OFFSET = LIMIT*OFFSET;

	var articlesList = Article.find({'categories':{ $in:[TAG]}}).sort({'pubDate': -1}).skip(OFFSET).limit(LIMIT);
	articlesList.exec(function(err, articles) {
		if (err) {
			res.json(
				{
					status: "BAD",
					msj: 	"In this moment it's not possible to get articles, sorry about that :("
				}
			);
		}else{

			for(var i = 0; i < articles.length; i++){
				articles[i].description = striptags(articles[i].description);
			}

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
