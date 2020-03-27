const Discord = require("discord.js");
const client = new Discord.Client();
module.exports.run = async (client, message, Discord, prefix) => {
  const args = message.content.slice(prefix.length).split(/ +/);

let channel = message.channels.find(channel => channel.name === "🎮-announcements");

message.channel.send("@everyone").then(msg => {msg.delete(3000)});
let txt = args.join(" ");
const embed = new Discord.RichEmbed()
.setColor("#ccc")
.setTitle("📢Annoucements")
.setDescription(txt)
channel.send(embed)

   }
