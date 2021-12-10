// Command Handler
// Discord Bots
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/learning/bots/discord/06-command-handler.html
// https://youtu.be/B60Q74FHFBQ

const user = require('./commands/user.js');
const help = require('./commands/help.js');
const card = require('./commands/card.js');
const booster = require('./commands/booster.js');
const game = require('./commands/game.js');
const profile = require('./commands/profile.js');

const commands = { user, card, booster, help, game, profile };

module.exports = async function(msg) {
  if (msg.channel.id !== '715786219770085396') {
    let tokens = msg.content.split(' ');
    let command = tokens.shift();
    try {
    
      if (command.charAt(0) === '!') {
          command = command.substring(1);
          commands[command](msg, tokens);
        }
      }
    catch (err) {
      msg.channel.send('Vous n\'avez pas tapez une commande valide. Merci de taper !help pour voir la liste des commandes.'); 
    }

  }
};
