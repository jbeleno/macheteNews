/**! MACHETE NEWS
* @Author  Juan Sebastián Beleño Díaz
* @Email   <jsbeleno@gmail.com>
* @version 0.1.0
*
* This file handles with all the schema in the mongo database, it's the base
* and the central file to use all the mongo queries. 
**/

var mongoose = require ("mongoose");

var uristring = process.env.MONGO_URI;

// Define some useful constants
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;


// Define Schemas
var JournalSchema = new Schema({
	id : 		{ type : Number, min:0},
	name : 		{ type : String },
	country: 	{ type : String },
	url: 		{ type : String },
	rss_list : 	{ type : Object , default : {} },
	date: 		{ type: Date, default: Date.now }
});

var Journal = mongoose.model('Journal', JournalSchema);

var RssFeedSchema = new Schema({
	id : 		{ type : Number, min:0},
	name : 		{ type : String },
	url: 		{ type : String },
	date: 		{ type: Date, default: Date.now },
	journal: 	{ type: ObjectId, ref: 'JournalSchema' }
});
				
var RssFeed = mongoose.model('RssFeed', RssFeedSchema);

var ArticleSchema = new Schema({
	id : 		{ type : Number, min:0},
  	title : 	{ type : String },
  	description:{ type : String },
  	link: 		{ type : String },
  	pubDate: 	{ type: Date, default: Date.now },
  	date: 		{ type: Date, default: Date.now },
  	categories: { type : Object , default : {} },
  	journal: 	{ type : String },
  	rss:    	{ type: ObjectId, ref: 'RssFeedSchema' }
});
									
var Article = mongoose.model('Article', ArticleSchema);

// Makes connection asynchronously.  Mongoose will queue up database
// operations and release them when the connection is complete.
mongoose.connect(uristring, function (err, res) {
  if (err) {
  console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
  console.log ('Succeeded connected to: ' + uristring);
  }
});

module.exports = mongoose;