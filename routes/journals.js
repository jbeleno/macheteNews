/**! MACHETE NEWS
* @Author  Juan Sebastián Beleño Díaz
* @Email   <jsbeleno@gmail.com>
* @version 0.1.0
*
* This controller has some temporal functions that will work while i code
* an automatized solution of getting some RSS feed, also I think that at
* least for today (2016-02-03) the most of this functions won't be used 
* intesivelly 
**/

var folhadeSPaulo = require('../helpers/information/folhadesaopaulo');
var OTempo = require('../helpers/information/otempo');
var OGlobo = require('../helpers/information/oglobo');
var express 	  = require('express');
var router 		  = express.Router();
var mongoose 	  = require('mongoose');
var Journal		  = mongoose.model('Journal');
var RssFeed		  = mongoose.model('RssFeed');

/**
* This controller function is to collect all the basic information about
* the RSS feed from the journal Folha de S.Paulo
**/
router.get('/createfdsp', function(req, res, next) {
	var fdsp = new Journal ({
		name : 		folhadeSPaulo.info.name,
		country: 	folhadeSPaulo.info.country,
		url: 		folhadeSPaulo.info.url
	});
	fdsp.save(function (err) {if (err) console.log ('Error on save!')});


	for (var i = 0; i < folhadeSPaulo.categories.length; i++) {
		var fdspFeed = new RssFeed ({
			name : 		folhadeSPaulo.categories[i].name,
			url: 		folhadeSPaulo.categories[i].url,
			date: 	    folhadeSPaulo.categories[i].date,
			journal: 	fdsp._id
		});
		fdspFeed.save(function (err) {
			if (err) console.log ('Error on save!')
		});	
	};

	res.json(fdsp);
});

/**
* This controller function is to collect all the basic information about
* the RSS feed from the journal O Globo
**/
router.get('/createoglobo', function(req, res, next) {
	var O_Globo = new Journal ({
		name : 		OGlobo.info.name,
		country: 	OGlobo.info.country,
		url: 		OGlobo.info.url
	});
	O_Globo.save(function (err) {if (err) console.log ('Error on save!')});


	for (var i = 0; i < OGlobo.categories.length; i++) {
		var OGloboFeed = new RssFeed ({
			name : 		OGlobo.categories[i].name,
			url: 		OGlobo.categories[i].url,
			date: 	    OGlobo.categories[i].date,
			journal: 	O_Globo._id
		});
		OGloboFeed.save(function (err) {
			if (err) console.log ('Error on save!')
		});	
	};

	res.json(O_Globo);
});

/**
* This controller function is to collect all the basic information about
* the RSS feed from the journal O Tempo
**/
router.get('/createotempo', function(req, res, next) {
	var O_Tempo = new Journal ({
		name : 		OTempo.info.name,
		country: 	OTempo.info.country,
		url: 		OTempo.info.url
	});
	O_Tempo.save(function (err) {if (err) console.log ('Error on save!')});


	for (var i = 0; i < OTempo.categories.length; i++) {
		var OTempoFeed = new RssFeed ({
			name : 		OTempo.categories[i].name,
			url: 		OTempo.categories[i].url,
			date: 	    OTempo.categories[i].date,
			journal: 	O_Tempo._id
		});
		OTempoFeed.save(function (err) {
			if (err) console.log ('Error on save!')
		});	
	};

	res.json(O_Tempo);
});
module.exports = router;