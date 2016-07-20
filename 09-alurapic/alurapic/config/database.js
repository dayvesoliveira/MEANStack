// alurapic/config/database.js

module.exports = function(uri) {

    var mongoose = require('mongoose');

    mongoose.connect('mongodb://' + uri)

    mongoose.connection.on('connected', function() {
        console.log('Conectado ao MongoDB')
    });

    mongoose.connection.on('error', function(error) {
        console.log('Erro na conex�o: ' + error);
    });    

    mongoose.connection.on('disconnected', function() {
        console.log('Desconectado do MongoDB')
    });

    process.on('SIGINT', function() {
        mongoose.connection.close(function() {
            console.log('Aplica��o terminada, conex�o fechada')
            process.exit(0);
        });
    })
};