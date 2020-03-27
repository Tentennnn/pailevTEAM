const Discord = require("discord.js");
const client = new Discord.Client();
module.exports.run = async (client, message, Discord, prefix) => {
  const args = message.content.slice(prefix.length).split(/ +/);


message.channel.send("@everyone").then(msg => {msg.delete(3000)});
let txt = args.join(" ");
const embed = new Discord.RichEmbed()
.setColor("#ccc")
.setTitle("📢Annoucements")
.setDescription(txt)
message.channel.send(embed)

   }
