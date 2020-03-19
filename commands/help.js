const Discord = require("discord.js");

exports.run = (client, message, Discord, prefix) => {


const args = message.content.slice(prefix.length).split(/ +/);
const commandName = args.shift().toLowerCase(); 
 
 //message.delete(100);
    //if(message.author.id !== "356510829920780289") return;
    
   // let say = args.join("");
    let embedsay = new Discord.RichEmbed()
       .setColor('RANDOM')
       .setDescription('THIS BOT WILL HOST SOON....\n\n\n**CONTACT :**\nDEVOLEPOR : Ort Brap Tuk Oy Chngol\nFACEBOOK : [CLICK HERE](https://www.facebook.com/heaalong855)\n\nDISCORD : [CLICK HERE](https://discord.gg/ZWWD7zT)')
       .setTitle(message.guild.name)
       
    message.channel.send(embedsay)
    //message.delete(100000);
 
 
 
}
