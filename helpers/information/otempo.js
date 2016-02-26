/**! MACHETE NEWS
* @Author  Juan Sebastián Beleño Díaz
* @Email   <jsbeleno@gmail.com>
* @version 0.1.0
*
* This file handles with the basic information and the categories
* in the journal O Tempo, that is the owner of Super Notícias, the 
* information is shown in JSON format
**/
exports.info = {
	name: 		"Jornal O Tempo",
	country: 	"Brazil",
	url: 		"http://www.otempo.com.br/",
	date: 		Date.now
};

exports.categories = [
	{
		name:   		"Economia",
		url: 			"http://www.otempo.com.br/rss/economia",
		date: 			new Date().toISOString()
	},
	{
		name:   		"Brasil",
		url: 			"http://www.otempo.com.br/rss/brasil",
		date: 			new Date().toISOString()
	},
	{
		name:   		"Cidades",
		url: 			"http://www.otempo.com.br/rss/cidades",
		date: 			new Date().toISOString()
	},
	{
		name:   		"Mundo",
		url: 			"http://www.otempo.com.br/rss/mundo",
		date: 			new Date().toISOString()
	},{
		name:   		"Magazine",
		url: 			"http://www.otempo.com.br/rss/magazine",
		date: 			new Date().toISOString()
	},
	{
		name:   		"Política",
		url: 			"http://www.otempo.com.br/rss/politica",
		date: 			new Date().toISOString()
	},{
		name:   		"Interessa",
		url: 			"http://www.otempo.com.br/rss/interessa",
		date: 			new Date().toISOString()
	},
	{
		name:   		"Diversão",
		url: 			"http://www.otempo.com.br/rss/diversao",
		date: 			new Date().toISOString()
	},{
		name:   		"Futêbol",
		url: 			"http://www.otempo.com.br/rss/futebol",
		date: 			new Date().toISOString()
	},
	{
		name:   		"SuperFC",
		url: 			"http://www.otempo.com.br/rss/superfc",
		date: 			new Date().toISOString()
	},{
		name:   		"Vôlei",
		url: 			"http://www.otempo.com.br/rss/volei",
		date: 			new Date().toISOString()
	},{
		name:   		"Fórmula 1",
		url: 			"http://www.otempo.com.br/rss/f1",
		date: 			new Date().toISOString()
	},
	{
		name:   		"Outros esportes",
		url: 			"http://www.otempo.com.br/rss/outros-esportes",
		date: 			new Date().toISOString()
	},{
		name:   		"Super Notícia",
		url: 			"http://www.otempo.com.br/rss/super-noticia",
		date: 			new Date().toISOString()
	},{
		name:   		"Jornal Pampulha",
		url: 			"http://www.otempo.com.br/rss/pampulha",
		date: 			new Date().toISOString()
	},
	{
		name:   		"O Tempo Betim",
		url: 			"http://www.otempo.com.br/rss/o-tempo-betim",
		date: 			new Date().toISOString()
	},{
		name:   		"O Tempo Contagem",
		url: 			"http://www.otempo.com.br/rss/o-tempo-contagem",
		date: 			new Date().toISOString()
	}
]