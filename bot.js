var Botkit = require('botkit');
var os = require('os');
var imageLink = 'http://ichef-1.bbci.co.uk/news/560/media/images/59944000/jpg/_59944322_br_cosmo624.jpg';

var controller = Botkit.slackbot({
  debug: false
});

var bot = controller.spawn({
  token: process.env.token
}).startRTM(function (err, bot, payload) {
  if (err) {
    bot.botkit.log('Something went wrong:', err);
    process.exit(1);
  }
});

controller.hears(['share the love'],
                 ['direct_message', 'direct_mention', 'mention'],
                 shareTheLove);

function shareTheLove(bot, message) {
  bot.reply(message, 'Certainly! I hope this cheers you up! ' + imageLink);
}
