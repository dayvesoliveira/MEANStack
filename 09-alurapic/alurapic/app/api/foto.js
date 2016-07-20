/* sem conexao com o banco mongoose

var CONTADOR_ID = 2;

var fotos = [
	{_id: 1, titulo: 'Leão', url:'http://www.fundosanimais.com/Minis/leoes.jpg' },
	{_id: 2, titulo: 'Leão 2', url:'http://www.fundosanimais.com/Minis/leoes.jpg' }
];

var api = {};

api.lista = function(req, res) {

	res.json(fotos);
};

api.buscaPorId = function(req, res) {

	var foto = fotos.find(function(foto) {
		return foto._id == req.params.id;
	});

	res.json(foto);

};

api.removePorId = function(req, res) {

	fotos = fotos.filter(function(foto) {
		return foto._id != req.params.id;
	});

	res.sendStatus(204);
};

api.adiciona = function(req, res) {

	var foto = req.body;
	foto._id = ++CONTADOR_ID;
	fotos.push(foto);
	res.json(foto);
};

api.atualiza = function(req, res) {

	var fotoId = req.params.id;
	var foto = req.body;

	var indice = fotos.findIndex(function(foto) {
		return foto._id == fotoId;
	});

	fotos[indice] = foto;
	res.sendStatus(200);

};*/

var mongoose = require('mongoose');

var api = {
	
	lista: function(req, res) {
		var model = mongoose.model('Foto');
		model.find({})
			 .then(function(fotos){

			 	res.json( fotos );

			 }, function(error){
			 	console.log(error);
			 	res.status(500).json(error);
			 });
	},

	buscaPorId: function(req, res) {


	},

	removePorId: function(req, res) {

	},

	adiciona: function(req, res) {

	},

	atualiza: function(req, res) {


	}

};

module.exports = api;