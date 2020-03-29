const Discord = require("discord.js");
const client = new Discord.Client();
module.exports.run = async (client, message, Discord, prefix) => {
  const args = message.content.slice(prefix.length).split(/ +/);
  let channel = args[0];
  let chat = args[1];

    let channel = message.channels.find(channel => channel.name === `${channel}`);
    let chatchannel = message.guild.channels.find(`name`, `${channel}`);
    if(!chatchannel) return message.channel.send("you need create channel #announcements to use annto !");

   chatchannel.send(chat);

   }
