exports.run = (client, message, Discord, prefix) => {

message.delete();

if(message.author.id !== "356510829920780289") return;

//let webText = "www.tamotoji.tk";
const embed = new Discord.RichEmbed()
.setTitle("http://tamotoji.tk/")
.setThumbnail("https://cdn.discordapp.com/attachments/460329537805484032/462175159579705344/LEGEND_20180629_140900.gif")
.setFooter("[CLICK HERE](http://tamotoji.tk/) | TAMOTOJI")
//.setFooter("Hosting : github.com | TAMOTOJI", "https://cdn.discordapp.com/attachments/460329537805484032/462163125056307200/GitHub-Mark.png")
.setAuthor("Website : TAMOTOJI", message.author.avatarURL)
.setDescription("Discord : `TAMOTOJI's HangOut Server`\nDiscord Cambodia Community!🎉\n\n__**TAMOYOJI's  HangOut Server**__ Includes a Very Hug And Diverse Community , Free Game And Custom BOT And More!\n");//ebsite : [tamotoji.tk](http://bit.ly/2IygbyV)");
//.addField("Web Link :", "[CLICK HERE](
//message.channel.send(webText);
//let web = message.channel.send(embed) || message.channel.send(webText);

message.channel.send(embed);
}
