/**! MACHETE NEWS
* @Author  Juan Sebastián Beleño Díaz
* @Email   <jsbeleno@gmail.com>
* @version 0.1.0
*
* This controller will be the one to scrape all the RSS that exist in the 
* mongo database and store each article, but I think this file in the future
* also will manage the articles content to summarize them
**/

var express = require('express');
var scraper = require('../models/rss_feed');
var router = express.Router();
var mongoose = require('mongoose');
var RssFeed = mongoose.model('RssFeed');
var Journal = mongoose.model('Journal');


/** 
* This controller function just scrape all the rss in the mongo database and
* store each article that doesn't exist yet in it
**/
router.get('/all', function(req, res, next) {

	RssFeed.find({}, function(err, RssFeeds) {
		if (err) console.log('Error reading the RSS');
		else{
	  		RssFeeds.forEach(function(rss) {
	  			Journal.findOne({ '_id': rss._id }, 'name', function (err, journalItem) {
		  			if (err) console.log('Problems in finding an article');
 
 					if(journalItem){
		    			var articles = scraper.fetch(rss.url, rss._id, journalItem.name); 
		    		}
	    		});
	  		});
		}
	});

  	//res.json({status: "OK"});

});
//DEBUG=macheteNews:* npm start
module.exports = router;
