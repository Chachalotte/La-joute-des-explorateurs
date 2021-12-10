require('dotenv').config();
const { MessageEmbed } = require('discord.js');
let connection;

(async () => {
    connection = await require('../database/db');
})();

module.exports = async function(msg, args) {

    const embed = new MessageEmbed()
    .setTitle('Liste des commandes')
    // .setAuthor(item.user_username)
    // .setImage(item.user_money)
    .addFields(
        { name: '!user: ', value: 'Permets de s\'inscrire à la joute des explorateurs ou de voir la liste des utilisateurs' },
        { name: '!booster: ', value: 'Permets d\'acheter un booster'},
        { name: '!inventaire: ', value: 'Permets d\'accéder à vos cartes et l\'argent que vous possédez'},
        { name: '!card: ', value: 'Listes des cartes. Ajouter le préfix de l\'extension pour afficher une liste spécifique'},
        { name: '!profile: ', value: 'Afficher votre inventaire'},
        { name: '!game: ', value: 'Lancer une partie'},

    )
    msg.channel.send(({ embeds: [embed] }));

}