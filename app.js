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
//const Canvas = require('Canvas');

let prefix = "#";


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag} on ${client.guilds.size} Servers ..`);
   client.channels.get("690183762633424927").send(`🔴\`LIVE\` BOT Is Online Now ! <@356510829920780289> `).then(msg => msg.delete(50000));
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
    
  if(command === "poll") {
   if(message.author.id !== "356510829920780289") return;
   message.delete();
   message.channel.send(args.join(" "));
//  message.react('👍');
//  message.react('👎');
}
 
   if(command === "prserver") {
      message.delete(500);
      let member = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
      //if(!message.member.hasPermission("ADMINISTRATOR"))
     // let devID = "356510829920780289"
      if(message.author.id !== "356510829920780289") return message.reply(`> You Can't Do It , Only Bot Developer! || Do **${config.prefix}dev** To Slow BOT DEVELOPER`).then(msg => msg.delete(10000));
       
     // return message.reply("You Dont Have Permission");
     // let Message = args.join(" ").slice(0);
    //  let LINK = args.join(" ").slice(1);
   // if (!LINK) return message.channel.send(""+message.member+" Please Enter Your Text To Dm Player From Server");

    message.guild.members.forEach((player) => {
        message.guild.member(player).send({embed: {
          color: 0xffffff,
       //   Author: `${mess`,
          title: `► SUPPORT BOT`,
          description: ` 🏷 **Now We Need You To Help . \nPlease Help Share This LINK To Your Server/Friend, THANK YOU SO MUCH ! ** \n\n►►► https://discord.gg/ZWWD7zT ◄◄◄`,
        }});
    });

    message.channel.send("<@"+message.author.id+"> Your Dm Has Been Send To Player !").then(m => m.react("📥"));
   

};

   if(command === "status" ) {
//  message.channel.send("@everyone ► NEW STATUS POST NOW ! REACT BY CLICK EMOJI ");
  message.delete();
 //if(!message.member.roles.some(r=>["STATUS", "status"].includes(r.name)) )
     // return message.reply("You Need Invite 10 People To Get `STATUS` Roles To Use This Commands ! \n\nGo To #bot-command and do `--ranks` to view more role rewards !").then(msg => msg.delete(12000));
    if(!args[0]) {
       const statushelp = new Discord.RichEmbed()
       .setTitle(`Facebook Status xD : ${config.prefix}status <STATUS>`)
        return message.channel.send(statushelp).then(msg => msg.delete(8000));
    }
    let status = args.join(" ");
    message.delete();
    let announceEmbed = new Discord.RichEmbed()
    .setColor(`RANDOM`)
    .setDescription(status)
    .setFooter(`${message.author.username} STATUS •`, message.author.avatarURL)
    .setTimestamp()
    .setTitle("STATUS | STORY :")

    let m = await message.channel.send(announceEmbed);
    await m.react(`👍`);
    await m.react(`❤`);
    await m.react(`😂`);
    await m.react(`😮`);
    await m.react(`😢`);


}



});

client.login(process.env.TOKEN);
