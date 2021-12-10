require('dotenv').config();
const { MessageEmbed } = require('discord.js');
let connection;

(async () => {
    connection = await require('../database/db');
})();

module.exports = async function(msg, args) {

    const embed = new MessageEmbed()
    .setAuthor('I\'ve moved on');
    // .setAuthor(item.user_username)
    // .setImage(item.user_money)

    msg.channel.send(({ embeds: [embed] }));

}