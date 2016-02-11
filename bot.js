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
                 ['direct_message', 'direct_mention', 'mention','ambient'],
                 shareTheLove);
                 
controller.hears(['coldplay'],
                ['direct_message', 'direct_mention', 'mention','ambient'],
                coldplay);

controller.hears(['Inigo Montoya'],
                ['direct_message', 'direct_mention', 'mention','ambient'],
                inigoMontoya);

controller.hears(['jazzed'],
                ['direct_message', 'direct_mention', 'mention','ambient'],
                jazzed);

function shareTheLove(bot, message) {
  bot.reply(message, 'Certainly! I hope this cheers you up! ' + imageLink);
}

function coldplay(bot,message) {
  bot.reply(message, 'Mom always said: You have to wait 30 minutes after lunch before you listen to Coldplay '
  + 'http://i.imgur.com/voY14ux.jpg');
}

function inigoMontoya(bot,message){
  bot.reply(message,'Hello. My name is Inigo Montoya. You killed my father. Prepare to die.');
}

function jazzed(bot,message){
  bot.reply(message,'Not as jazzed as the Covisint waiting song.');
}
