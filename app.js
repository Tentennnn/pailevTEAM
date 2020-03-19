const Discord = require('discord.js'),
      Chance = require('chance'),
      random = new Chance(),
      parseArgs = require('minimist'),  
      arraySort = require('array-sort'), 
      table = require('table'), 
      send = require('quick.hook');
const config = require("./config.json");
const fs = require("fs");
const client = new Discord.Client();
const ms = require("ms");
const encode = require('strict-uri-encode');
const snekfetch = require('snekfetch');
const superagent = require("superagent");
const meme = require('memejs');
const gifSearch = require("gif-search"); 
const db = require('quick.db');

let prefix = "#";


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag} on ${client.guilds.size} Servers ..`);
   client.channels.get("690183762633424927").send(`🔴\`LIVE\` **<@457770979519627275>** Is Online Now ! <@356510829920780289> `).then(msg => msg.delete(50000));
   //client.user.setActivity(`${prefix}help | PAILEV`, { type: 'WATCHING' })
  });


function setActivity() {
    //Variable Array for what the setGame can be set to
    var Gameinfo = [`${prefix}help`, `${prefix}help`, //`Run on ${client.guilds.size} Servers
        `${prefix}help`, `${prefix}help`, `P A I L E V` // Change these to what you want, add as many or as few as you want to
    ]

    var info = Gameinfo[Math.floor(Math.random() * Gameinfo.length)]; //Random Math to set the setGame to something in the GameInfo array

    client.user.setActivity(info) // "playing Game" '...' Sets the setGame to what the info Random math picked from the GameInfo Array
    if (config.debugMode === "1") {
        console.log(`[ LOG ] set Activity set to ( ${info} )`) //Logs to console what the setGame was set as.
    }

}

setInterval(setActivity, 1000 * 60 * 2)


client.on("guildMemberAdd", async member => {
    var images = ["https://cdn.discordapp.com/attachments/442655163254308864/458569892233478145/20180619_165111.png", "https://cdn.discordapp.com/attachments/442655163254308864/458569893638438912/20180619_165132.png", "https://cdn.discordapp.com/attachments/442655163254308864/458569894158401537/20180619_165038.png", "https://cdn.discordapp.com/attachments/442655163254308864/458570061461061632/20180619_165333.png", "https://cdn.discordapp.com/attachments/442655163254308864/458570199688413204/20180619_165405.png",];
    var rand = Math.floor(Math.random() * images.length);
    var randomImage = images[rand];

    let memberjoin = member.guild.channels.find('name', "join-logs");
const embed = new Discord.RichEmbed()
//.setTitle(`${member}`)
.setThumbnail(member.user.avatarURL)
.setImage(randomImage)
.setColor('RANDOM')
.setFooter(`MobileLegendsBoomBoom`)
.setTimestamp()
    .setDescription(`WELCOME **${member}** TO **${member.guild.name}** SERVER  , YOU ARE A MEMBER : **${member.guild.memberCount}**`);
memberjoin.sendEmbed(embed);
});   

client.on("guildMemberAdd", async member => {
    let memberjoin = member.guild.channels.find('name', "new-player");
const embed = new Discord.RichEmbed()
.setThumbnail(member.user.avatarURL)
.setColor('#1f49a1')
.setFooter('🔵 MEMBER JOIN !')
.setTimestamp()
    .setDescription(`**[ ${member} ]** \nWELCOME TO **${member.guild.name}** SERVER  , YOU ARE A MEMBER : **${member.guild.memberCount}**\n•  `);
memberjoin.sendEmbed(embed);
//.react('🔗');
});

   
client.on("message", async message => {
  if(message.author.bot) return;
  if(message.content.startsWith(prefix)){
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    
    try {
      let commandFile = require(`./commands/${command}.js`);
      commandFile.run(client, message, Discord, prefix, );
    } catch (err) {
      console.error(err);
    }
  }
});

client.on("message", async message => {
    if(message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase(); 
    
  if(command === "say") {
   if(message.author.id !== "356510829920780289") return;
   message.delete();
   message.channel.send(args.join(" "));
}
 
//  if(command === "embad") {
       // message.delete(1000);
  //  if(message.author.id !== "356510829920780289") return;
//     let args = args.join(" ");
 //    let sembad = new Discrd.RichEmbed()
  //      .setColor('RANDOM')
  //      .setDescription('args');
 //       
   //     message.channel.send(sembad);
// }

});

client.login(process.env.TOKEN);
