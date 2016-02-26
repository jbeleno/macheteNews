/**! MACHETE NEWS
* @Author  Juan Sebastián Beleño Díaz
* @Email   <jsbeleno@gmail.com>
* @version 0.1.0
*
* This file handles the main function about getting the basic information
* available in the journals' RSS feed that will be indexed.
* 
* NOTE: most of the code in this file was taken from the 'iconv.js' example
* provided in https://github.com/danmactough/node-feedparser/blob/master/examples/iconv.js
**/

/**
* It's loaded the request library to send a web request on the sites
* that will be indexed, feedparser is necessary for getting the RSS 
* in JSON, iconv is used to transform the RSS result in UTF-8, and 
* mongoose and Article are to save information in mongoDB
**/
var request = require('request'), 
FeedParser = require('feedparser'),
Iconv = require('iconv').Iconv,
mongoose = require('mongoose'),
Article = mongoose.model('Article');

/**
* This function collects the basic information about each article reported in the RSS
* and stores them in a mongo database
**/
exports.fetch = function(feed, id_rss, journal_name) {
  	// Define our streams
  	var req = request(feed, {timeout: 10000, pool: false, encoding: null});
  	req.setMaxListeners(50);

	// Some feeds do not respond without user-agent and accept headers.
	req.setHeader('user-agent', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36');
	req.setHeader('accept', 'text/html,application/xhtml+xml');

	var feedparser = new FeedParser();

	// Define our handlers
	req.on('error', done);
	req.on('response', function(res) {
		if (res.statusCode != 200) 
			return this.emit('error', new Error('Bad status code'));

		var charset = getParams(res.headers['content-type'] || '').charset;
		if(!charset) charset = 'ISO-8859-1';
		res = maybeTranslate(res, charset);
		// And boom goes the dynamite
		res.pipe(feedparser);
	});

	feedparser.on('error', done);
	//feedparser.on('end', done);
	feedparser.on('readable', function() {
		var post;
		while (post = this.read()) {
			save(post, id_rss, journal_name);
		}
	});
}

/**
* This function saves the article item if doesn't exist yet
**/
var save = function(post, id_rss, journal_name){
	if(post){
		// First I see if the article exist, if not I include it in the database
		Article.findOne({ 'title': post.title }, 'title', function (err, articleItem) {
		  if (err) console.log('Problems in finding an article');

		  if(!articleItem){
		  	var data = {
				title: 			post.title,
				description: 	post.description,
				link: 			post.link,
				pubDate: 		post.pubDate,
				journal: 		journal_name,
				rss: 			id_rss
			};

			var SportTags = [
				"56b176e393e381020404a8d5",
				"56c8fbeea9899870208f1cd9",
				"56c8fbeea9899870208f1ce5",
				"56c8fbdda9899870208f1cce",
				"56c8fbdda9899870208f1ccf",
				"56c8fbdda9899870208f1cd0",
				"56c8fbdda9899870208f1cd1",
				"56c8fbdda9899870208f1cd2"
			];

			var PoliticTags = [
				"56b176e393e381020404a8d0",
				"56c8fbeea9899870208f1ce1",
				"56c8fbdda9899870208f1ccb"
			];

			var TechnologyTags = [
				"56b176e393e381020404a8db",
				"56c8fbeea9899870208f1ce3"
			];

			var WorldTags = [
				"56b176e393e381020404a8d1",
				"56c8fbdda9899870208f1cc9",
				"56c8fbeea9899870208f1cdd"
			];

			var EconomyTags = [
				"56b176e393e381020404a8d2",
				"56c8fbeea9899870208f1cdb",
				"56c8fbdda9899870208f1cc6"
			];

			var DailyTags = [
				"56b176e393e381020404a8d3",
				"56c8fbeea9899870208f1cd8",
				"56c8fbeea9899870208f1ce0",
				"56c8fbdda9899870208f1cc7",
				"56c8fbdda9899870208f1ccd",
				"56c8fbdda9899870208f1cd3"
			];

			if(SportTags.indexOf(id_rss.toString()) >= 0){
				data.categories = ["Esportes"];
			}else if(PoliticTags.indexOf(id_rss.toString()) >= 0){
				data.categories = ["Política"];
			}else if(TechnologyTags.indexOf(id_rss.toString()) >= 0){
				data.categories = ["Tecnologia"];
			}else if(WorldTags.indexOf(id_rss.toString()) >= 0){
				data.categories = ["Internacional"];
			}else if(EconomyTags.indexOf(id_rss.toString()) >= 0){
				data.categories = ["Economia"];
			}else if(DailyTags.indexOf(id_rss.toString()) >= 0){
				data.categories = ["Cotidiano"];
			}

		  	var art = new Article(data);
			art.save(function (err) {if (err) console.log ('Error on save!')});
		  }
		
		});
	}
}

/**
* This function converts the request result in UTF-8 encoding
**/
var maybeTranslate = function(res, charset) {
	var iconv;
  	// Use iconv if its not utf8 already.
  	if (!iconv && charset && !/utf-*8/i.test(charset)) {
	    try {
			iconv = new Iconv(charset, 'utf-8');
			iconv.on('error', done);
			// If we're using iconv, stream will be the output of iconv
			// otherwise it will remain the output of request
			res = res.pipe(iconv);
	    } catch(err) {
	      	console.log('Problems with the conversion to UTF-8 charset');
	      	//res.emit('error', err);
	    }
  	}
  	return res;
}

/**
* This function parses the request header in something more readable,
* it's used mainly in getting the charset in the request
**/
var getParams = function(str) {
  	var params = str.split(';').reduce(function(params, param){
	    var parts = param.split('=').map(function(part){ return part.trim(); });
	    if (parts.length === 2) {
	      	params[parts[0]] = parts[1];
	    }
	    return params;
  	}, {});
  	return params;
}

/**
* This function handles all errors that happen during the process of
* getting the web request and the transformation from RSS to JSON
**/
var done = function(err) {
	if (err) {
		console.log(err, err.stack);
		return process.exit(1);
	}
	process.exit();
}