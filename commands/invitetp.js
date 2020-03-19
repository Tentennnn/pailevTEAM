exports.run = (client, message, Discord, prefix) => {

message.delete();
if(message.author.id !== "356510829920780289") return;

const embed = new Discord.RichEmbed()
.setTitle("TAMOTOJI's Hangout Server")
.setDescription("Discord Server:\n**TAMOTOJI's Hangout Server**\n\nInvite Link :\n[https://discord.gg/ZWWD7zT](https://discord.gg/ZWWD7zT)")
.setImage("https://cdn.discordapp.com/attachments/461109418315087872/462492319057313792/output_Yizkfw.gif");

message.channel.send(embed);

}
