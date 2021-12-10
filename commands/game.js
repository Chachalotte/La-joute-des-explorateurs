require('dotenv').config();
const Canvas = require('canvas');
const { MessageAttachment } = require('discord.js');
const { test } = require('../commands/user');

let connection;

(async () => {
    connection = await require('../database/db');
})();

module.exports = async function(msg, args) {

    const canvas = Canvas.createCanvas(2000, 1000);
    const context = canvas.getContext('2d');

    const background = await Canvas.loadImage('https://cdna.artstation.com/p/assets/images/images/043/656/524/large/artem-demura-dialog1.jpg?1637880969');
    context.drawImage(background, 0, 0, canvas.width, canvas.height);

    context.strokeStyle = '#0099ff';

    const avatar = await Canvas.loadImage("https://pile.randimg.net/3/46/199002/Elyna.png");
	// Draw a shape onto the main canvas
	context.drawImage(avatar, 200, 0, 800, canvas.height);
    const eileen = await Canvas.loadImage("https://static.wikia.nocookie.net/witcher/images/1/1f/Tw3_ciri_by_ivances-d7v55z5.png/revision/latest?cb=20160527143845");
	context.drawImage(eileen, 1000, -400, 400, 2000);
	// context.drawImage(image nom, 500, 0, largeur, canvas.height);


    context.strokeRect(500, 0, canvas.width, 500);

    context.font = '28px sans-serif';
    context.fillStyle = '#ffffff';

    context.fillStyle = '#ffffff';

    context.beginPath();
    context.arc(125, 125, 100, 0, Math.PI * 2, true);
    context.closePath();
    context.clip();

    // const avatar = await Canvas.loadImage(interaction.user.displayAvatarURL({ format: 'jpg' }));
    // context.drawImage(avatar, 25, 25, 200, 200);

    const attachment = new MessageAttachment(canvas.toBuffer(), 'https://www.coca-cola-france.fr/content/dam/one/fr/fr/lead/le-logo-coca-cola-huit-lettres-un-trait-dunion.jpg');

    msg.reply({ files: [attachment] });
}