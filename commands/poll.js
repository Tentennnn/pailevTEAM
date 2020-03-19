
const Discord = require("discord.js");
const send = require('quick.hook');

exports.run = (client, message, Discord, prefix, args) => {

const args = message.content.slice(prefix.length).split(/ +/);
const commandName = args.shift().toLowerCase(); 
    message.channel.send("@everyone");
  //  message.delete(900);
    let poll = args.join(" ");

    let announceEmbed = new Discord.RichEmbed()
    .setColor(`RANDOM`)
    .setTimestamp()
    .setTitle(poll)

    message.channel.send(announceEmbed);
    message.react(`✅`);
    message.react(`❌`);

}
module.exports.help = {
    name: "poll"
  }
