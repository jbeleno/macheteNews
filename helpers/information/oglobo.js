/**! MACHETE NEWS
* @Author  Juan Sebastián Beleño Díaz
* @Email   <jsbeleno@gmail.com>
* @version 0.1.0
*
* This file handles with the basic information and the categories
* in the journal O Globo, the information is shown in JSON format
**/
exports.info = {
	name: 		"Jornal O Globo",
	country: 	"Brazil",
	url: 		"http://oglobo.globo.com/",
	date: 		Date.now
};

exports.categories = [
	{
		name:   		"Brasil",
		url: 			"http://g1.globo.com/dynamo/brasil/rss2.xml",
		date: 			new Date().toISOString()
	},{
		name:   		"Carros (Autoesporte.com)",
		url: 			"http://g1.globo.com/dynamo/carros/rss2.xml",
		date: 			new Date().toISOString()
	},{
		name:   		"Ciência e Saúde",
		url: 			"http://g1.globo.com/dynamo/ciencia-e-saude/rss2.xml",
		date: 			new Date().toISOString()
	},{
		name:   		"Economia",
		url: 			"http://g1.globo.com/dynamo/economia/rss2.xml",
		date: 			new Date().toISOString()
	},{
		name:   		"Educação",
		url: 			"http://g1.globo.com/dynamo/educacao/rss2.xml",
		date: 			new Date().toISOString()
	},{
		name:   		"Mundo",
		url: 			"http://g1.globo.com/dynamo/mundo/rss2.xml",
		date: 			new Date().toISOString()
	},{
		name:   		"Música",
		url: 			"http://g1.globo.com/dynamo/musica/rss2.xml",
		date: 			new Date().toISOString()
	},{
		name:   		"Natureza",
		url: 			"http://g1.globo.com/dynamo/natureza/rss2.xml",
		date: 			new Date().toISOString()
	},{
		name:   		"Planeta Bizarro",
		url: 			"http://g1.globo.com/dynamo/planeta-bizarro/rss2.xml",
		date: 			new Date().toISOString()
	},{
		name:   		"Política",
		url: 			"http://g1.globo.com/dynamo/politica/mensalao/rss2.xml",
		date: 			new Date().toISOString()
	},{
		name:   		"Pop & Arte",
		url: 			"http://g1.globo.com/dynamo/pop-arte/rss2.xml",
		date: 			new Date().toISOString()
	},{
		name:   		"Tecnologia e Games",
		url: 			"http://g1.globo.com/dynamo/tecnologia/rss2.xml",
		date: 			new Date().toISOString()
	},{
		name:   		"Turismo e Viagem",
		url: 			"http://g1.globo.com/dynamo/turismo-e-viagem/rss2.xml",
		date: 			new Date().toISOString()
	},{
		name:   		"Esporte",
		url: 			"http://globoesporte.globo.com/servico/semantica/editorias/plantao/feed.rss",
		date: 			new Date().toISOString()
	}
]