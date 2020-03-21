const Discord = require("discord.js");

exports.run = (client, message, Discord, prefix) => {


const args = message.content.slice(prefix.length).split(/ +/);
const commandName = args.shift().toLowerCase(); 
 
 message.delete(9000);
    //if(message.author.id !== "356510829920780289") return;
    
   // let say = args.join("");
    let embedsay = new Discord.RichEmbed()
       .setColor('RANDOM')
       //.setDescription(``)
       .setTitle(`${message.guild.name} | ${prefix}help`)
    .addField("Dev", "`leftserver`  `glist`")
    .addField("Moderation", "`clear`  `say`  `kick`  `ban`")
    .addField("Info", "`serverinfo`   `topinvites`  `dev`  `invitelist`  `banslist`")
    .addField("General", "`ping`  `avatar`  `emojilist`   `invite`  `botstats`   `userinfo`  ")
    .addField("Fun", "`get`  `ascii`  `gif`  `random` `status`  `luckymunber`  `magik` ")
    .addField("Roleplay", "`pat`  `kiss`  `love`")
    .addField("Contact", `FACEBOOK : [🔗 LINKS](https://www.facebook.com/heaalong855)\nDISCORD : [🔗 LINKS](https://discord.gg/ZWWD7zT)`)
       
    const pollTitle = message.channel.send(embedsay);
          pollTitle.react(`690770737828593665`);
    const filter = (reaction) => reaction.emoji.name === '690770737828593665';
   // message.react("📎");
    //message.delete(100000);
 
 
 
}
