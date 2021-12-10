require('dotenv').config();
const { Client, Intents, MessageEmbed } = require('discord.js');
let connection;
let ifExist = false;
let keywords = '';

(async () => {
    connection = await require('../database/db');
})();

module.exports = async function(msg, args) {

        console.log(keywords);
        if (args.length > 0) {
            keywords = args.join(' ');
            if (keywords === 'start') {
                try {
                    const queryTest = await connection.query(`SELECT user_id, user_username, user_money, user_inventory FROM users`);
                    const rows = queryTest[0];
                    //we need to loop inside an object with for in order to accept an await request instead of forEach
                    for (const item of rows) {
                        if (item.user_id  == msg.author.id) {
                            msg.channel.send('Cet utilisateur.trice existe déjà dans la base de données !');
                            ifExist = true;
                            return true;
                        }  
                        if (ifExist === false) {
                            const insert = await connection.query(`INSERT INTO users(user_id, user_username, user_inventory, user_money) VALUES(${msg.author.id}, "${msg.author.username}", "rien", 500)`);
                            msg.channel.send(`${msg.author.username} a bien été inscrit.e dans la base de données !`);
                        }
                    }
                }   
                catch (err){
                    return err;
                }        
            }
            else if (keywords === "list"){
                const queryTest = await connection.query(`SELECT user_id, user_username, user_money, user_inventory FROM users`);
                const rows = queryTest[0];
                // const defs = queryTest[1];
                msg.channel.send(`Liste des utilisateurs de la joute des explorateurs :`);
                const embed = new MessageEmbed()
                .setAuthor('I\'ve moved on');
                // .setAuthor(item.user_username)
                // .setImage(item.user_money)
                rows.forEach(item => {
                    embed.addFields(
                    { name: 'Pseudo: ', value: item.user_username, inline: true },
                    { name: 'Crédit: ', value: item.user_money, inline: true },
                    { name: 'Inventaire: ', value: item.user_inventory, inline: true },

                    )
                })
                msg.channel.send({ embeds: [embed] });
            }
        }
        //If there's any argument, then we reply to the user that he need to 
        else {
            msg.channel.send('Merci d\'ajouter un argument ! ')
        }
        

};