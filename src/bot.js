require('dotenv').config();
const { Client, Intents, MessageEmbed, Discord } = require('discord.js');
const { test } = require('../commands/user');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
let connection;
const mysql = require("mysql2/promise");


const prefix = "!";
client.on('ready', () => console.log(`${client.user.tag} loggend in.`));


client.on('ready', () => {


    client.channels.cache.get('894319399425703937').send('Le bot est lancé !')

});

// client.on("messageCreate", async (message) => {
//     try {
//         if (!message.content.startsWith(prefix) || message.author.bot) return;

//         if (message.content.startsWith(`${prefix}start`)) {
//             // const[ cmdName, newprefix ] = message.content.split(" ");
//             // const result = await connection.query(`SELECT hero_lastname, hero_firstname, hero_desc FROM heros`);
//             // console.log(result[0][0].hero_lastname);  
//             // message.channel.send('Fanfic Ethel avec ' + result[0][1].hero_firstname + ' ' + result[0][1].hero_lastname);
//             let result = test();
//             message.channel.send('OK!');
//             message.channel.send(result);

//         }
//         if (message.content.startsWith(`${prefix}insert`)) {
//             const embed = new MessageEmbed()
//             .setTitle('Attach file')
//             .setAuthor('Mayu')
//             .setImage("https://i.pinimg.com/236x/98/a2/12/98a2125fe2c32e0056b2a33a053874e5.jpg")
//             message.channel.send({ embeds: [embed] });
//         }
//     } catch(err) {
//         return;
//     }
// });
const commandHandler = require('../command');
client.on('message', commandHandler);

(async () => {
    connection = await require('../database/db');
    await client.login(process.env.TOKEN);
})();




