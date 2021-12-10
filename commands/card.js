require('dotenv').config();
const { Client, Intents, MessageEmbed } = require('discord.js');
let connection;

(async () => {
    connection = await require('../database/db');
})();

module.exports = async function(msg, args) {
    keywords = '';
    if (args.length > 0) {
        keywords = args.join(' ');
    }

    if (keywords === 'list') {
        const result = await connection.query(`SELECT hero_lastname, hero_firstname, hero_quote, hero_desc, hero_image FROM heros`);        
        const rows = result[0];
        msg.channel.send(`Liste des cartes de la joute des explorateurs :`);

        rows.forEach(item => {
            const embed = new MessageEmbed()
            // .setTitle(item.hero_firstname + ' ' + item.hero_lastname)
            .setAuthor(item.hero_firstname + ' ' + item.hero_lastname)
            .setImage(item.hero_image)
            .setDescription(item.hero_quote)
            msg.channel.send({ embeds: [embed] });
        });
    }

    else {
        msg.reply(`Merci d'entrer un argument !`);
    }

}