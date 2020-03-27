const Discord = require("discord.js");
const client = new Discord.Client();
module.exports.run = async (client, message, Discord, prefix) => {
  const args = message.content.slice(prefix.length).split(/ +/);

message.channel.send("@everyone").then(msg => {msg.delete(3000)});
//let channel = message.channels.find(channel => channel.name === "🎮-announcements");
    let chatchannel = message.guild.channels.find(`name`, "🎮-announcements");
    if(!chatchannel) return message.channel.send("you need create channel #announcements to use annto !");



let txt = args.join(" ");
const embed = new Discord.RichEmbed()
.setColor("#ccc")
.setTitle("📢Annoucements")
.setDescription(txt)
chatchannel.send(embed)

   }
