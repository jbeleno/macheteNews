/**! MACHETE NEWS
* @Author  Juan Sebastián Beleño Díaz
* @Email   <jsbeleno@gmail.com>
* @version 0.1.0
*
* This file handles with the basic information and the categories
* in the journal Folha de S.Paulo, the information is shown in 
* JSON format
**/
exports.info = {
	name: 		"Folha de S.Paulo",
	country: 	"Brazil",
	url: 		"http://www.folha.uol.com.br/",
	date: 		Date.now
};

exports.categories = [
	{
		name:   		"Poder",
		url: 			"http://feeds.folha.uol.com.br/poder/rss091.xml",
		date: 			new Date().toISOString()
	},
	{
		name:   		"Mundo",
		url: 			"http://feeds.folha.uol.com.br/mundo/rss091.xml",
		date: 			new Date().toISOString()
	},
	{
		name:   		"Mercado",
		url: 			"http://feeds.folha.uol.com.br/mercado/rss091.xml",
		date: 			new Date().toISOString()
	},
	{
		name:   		"Cotidiano",
		url: 			"http://feeds.folha.uol.com.br/cotidiano/rss091.xml",
		date: 			new Date().toISOString()
	},
	{
		name:   		"Educação",
		url: 			"http://feeds.folha.uol.com.br/educacao/rss091.xml",
		date: 			new Date().toISOString()
	},
	{
		name:   		"Esporte",
		url: 			"http://feeds.folha.uol.com.br/esporte/rss091.xml",
		date: 			new Date().toISOString()
	},
	{
		name:   		"Ilustrada",
		url: 			"http://feeds.folha.uol.com.br/ilustrada/rss091.xml",
		date: 			new Date().toISOString()
	},
	{
		name:   		"Ilustríssima",
		url: 			"http://feeds.folha.uol.com.br/ilustrissima/rss091.xml",
		date: 			new Date().toISOString()
	},
	{
		name:   		"Folhateen",
		url: 			"http://feeds.folha.uol.com.br/folhateen/rss091.xml",
		date: 			new Date().toISOString()
	},
	{
		name:   		"Ciência",
		url: 			"http://feeds.folha.uol.com.br/ciencia/rss091.xml",
		date: 			new Date().toISOString()
	},
	{
		name:   		"Ambiente",
		url: 			"http://feeds.folha.uol.com.br/ambiente/rss091.xml",
		date: 			new Date().toISOString()
	},
	{
		name:   		"Tec",
		url: 			"http://feeds.folha.uol.com.br/tec/rss091.xml",
		date: 			new Date().toISOString()
	},
	{
		name:   		"Comida",
		url: 			"http://feeds.folha.uol.com.br/comida/rss091.xml",
		date: 			new Date().toISOString()
	},
	{
		name:   		"Equilíbrio",
		url: 			"http://feeds.folha.uol.com.br/equilibrioesaude/rss091.xml",
		date: 			new Date().toISOString()
	},
	{
		name:   		"Folhinha",
		url: 			"http://feeds.folha.uol.com.br/folhinha/rss091.xml",
		date: 			new Date().toISOString()
	},
	{
		name:   		"Turismo",
		url: 			"http://feeds.folha.uol.com.br/turismo/rss091.xml",
		date: 			new Date().toISOString()
	},
	{
		name:   		"Empreendedor Social",
		url: 			"http://feeds.folha.uol.com.br/empreendedorsocial/rss091.xml",
		date: 			new Date().toISOString()
	}
];