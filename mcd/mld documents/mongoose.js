const mongoose = require('mongoose');
require('dotenv').config();

module.exports = {
    init: () => {
        const dpOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            autoIndex: false,
            poolSize: 5,
            connectTimeoutMS: 10000,
            family: 4
        };
    
        // Obtenu dans l'interface Moogo en cliquant sur le bouton "connect"
        mongoose.connect(`mongodb+srv://discordbot:${process.env.PASS}@bot.s7ccv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);
        mongoose.set('useFindAndModify', false);
        mongoose.Promise = global.Promise;

        mongoose.connection.on('connected', () => {

            console.log('Le bot est connecté à la base de données !');
        })


        mongoose.connection.on('disconnected', () => {

            console.log('Le bot s\'est déconnecté de la base de données !');
        })
    
        
        mongoose.connection.on('err', () => {

            console.log('Une erreur est survenue. ' + err);

        })
    
    }

}