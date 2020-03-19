const Discord = require("discord.js");

exports.run = (client, message, Discord, prefix) => {

const args = message.content.slice(prefix.length).split(/ +/);
const commandName = args.shift().toLowerCase(); 
 
 //message.delete(100);
    if(message.author.id !== "356510829920780289") return;
    
    let say = args.join("");
    let embedsay = new Discord.RichEmbed()
       .setColor('RANDOM')
       .setDescription('say')
    message.channel.send(embedsay)
    message.delete(100);
 
 
 
}
