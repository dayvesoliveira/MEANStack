var mongoose = require('mongoose');

var schema = mongoose.Schema({

	titulo:{
		type: String,
		requered: true
	},
	url: {
		type: String,
		requered: true
	},

	grupo:{
		type: Number,
		requered: true
	}

});

mongoose.model('Foto', schema);