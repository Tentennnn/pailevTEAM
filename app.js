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


client.on("guildMemberAdd", async member => {
    var images = ["https://cdn.discordapp.com/attachments/442655163254308864/458569892233478145/20180619_165111.png", "https://cdn.discordapp.com/attachments/442655163254308864/458569893638438912/20180619_165132.png", "https://cdn.discordapp.com/attachments/442655163254308864/458569894158401537/20180619_165038.png", "https://cdn.discordapp.com/attachments/442655163254308864/458570061461061632/20180619_165333.png", "https://cdn.discordapp.com/attachments/442655163254308864/458570199688413204/20180619_165405.png",];
    var rand = Math.floor(Math.random() * images.length);
    var randomImage = images[rand];
});
 
client.on("guildMemberAdd", async member => {
const Canvass = require('canvas');
//const snekfetch = require('snekfetch');

const applyText = (canvas, text) => {
	const ctx = canvas.getContext('2d');
	let fontSize = 70;

	do {
		ctx.font = `bold ${fontSize -= 10}px sans-serif`;
	} while (ctx.measureText(text).width > canvas.width - 300);

	return ctx.font;
};
const applyText2 = (canvas, text) => {
	const ctx = canvas.getContext('2d');
	let fontSize = 70;

	do {
		ctx.font = `bold ${fontSize -= 10}px sans-serif`;
	} while (ctx.measureText(text).width > canvas.width - 300);

    return ctx.font;
    
};

	
client.on("guildMemberAdd", async (member, client, message, args, level) => {  
  

    let channel = member.guild.channels.find('name', 'welcome');
    if (!channel) return;
   
	    var imageArray = [
        "https://cdn.discordapp.com/attachments/503595863814438914/578118407619346442/welcome-image4.jpg",
        "https://cdn.discordapp.com/attachments/503595863814438914/578118413566869505/welcome-image5.jpg",
        "https://cdn.discordapp.com/attachments/503595863814438914/578118421057765376/welcome-image7.jpg",
        "https://cdn.discordapp.com/attachments/503595863814438914/578118415114436615/welcome-image6.jpg"

      ];
      var cuddle = [Math.floor(Math.random() * imageArray.length)]
            const guild = member.guild;
      var color = [
        '#ecd012',
        '#8edb30',
        '#d3dbd3',
        '#ffffff',
        '#fafdcb',
        '#ffffff',
        '#c0c096'
      ]
 var random = [Math.floor(Math.random() * color.length)]
 var color2 = [
        '#0000ff',
        '#fff600',
        '#ff0000',
        '#fa00ff',
        '#4cff00',
        '#00ffe1',
        '#ffae00'
      ]
 var random2 = [Math.floor(Math.random() * color.length)]
      
  //	const channel = member.guild.channels.find(ch => ch.name === 'wel-test');
//	if (!channel) return;

	const canvas = Canvass.createCanvas(780, 250);
	const ctx = canvas.getContext('2d');

	
  const background = await Canvass.loadImage(`${imageArray[cuddle]}`);
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#000000';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	// Slightly smaller text placed above the member's display name
	ctx.font = applyText(canvas, 'Welcome');
	ctx.fillStyle = `${color[random]}`;
	ctx.fillText('Welcome', canvas.width / 3.2, canvas.height / 3.5);

	// Add an exclamation point here and below
	ctx.font = applyText2(canvas, `${member.displayName}!`);
	ctx.fillStyle = `${color2[random2]}`;
	ctx.fillText(`${member.displayName}!`, canvas.width / 2.7, canvas.height / 1.8);
     
    let bots = guild.members.filter(m => m.user.bot).size
      let members = member.guild.memberCount
  ctx.font = 'bold 24px DejaVu';
  ctx.fillStyle = '#ffff00';
  ctx.fillText(`: ${members} Member`, canvas.width / 2.82, canvas.height / 1.25);
      
  ctx.font = 'bold 24px DejaVu';
  ctx.fillStyle = '#ffff00';
  ctx.fillText(` : ${bots} Bots`, canvas.width / 1.45, canvas.height / 1.25);
      

  ctx.font = 'bold 24px DejaVu';
  ctx.fillStyle = '#ffff00';
  ctx.fillText(`Hope you'll enjoy your stay`, canvas.width / 1.93, canvas.height / 1.06);

	ctx.beginPath(); 
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const { body: buffer } = await snekfetch.get(member.user.displayAvatarURL);
	const avatar = await Canvass.loadImage(buffer);
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.Attachment(canvas.toBuffer(), 'welcome-image.png');

	channel.send(`Welcome To **${guild.name}**,${member}!You are the **${member.guild.memberCount}** Member!`, attachment);
         //   channel.send(`Welcome To **${guild.name}**, **${member}** Hope You Enjoy In This Server\nYou are the **${member.guild.memberCount}** Member!`);
    })
client.on("guildMemberRemove", async (member, client, message, args, level) => {  
  
 let channel = member.guild.channels.find('name', 'welcome');
    if (!channel) return;
   
	    var imageArray = [
        "https://cdn.discordapp.com/attachments/503595863814438914/578118407619346442/welcome-image4.jpg",
        "https://cdn.discordapp.com/attachments/503595863814438914/578118413566869505/welcome-image5.jpg",
        "https://cdn.discordapp.com/attachments/503595863814438914/578118421057765376/welcome-image7.jpg",
        "https://cdn.discordapp.com/attachments/503595863814438914/578118415114436615/welcome-image6.jpg"

      ];
      var cuddle = [Math.floor(Math.random() * imageArray.length)]
      const guild = member.guild;
      var color = [
        '#0000ff',
        '#ff0000',
        '#fff600',
        '#4cff00',
        '#fa00ff',
        '#00ffe1',
        '#ffae00'
      ]
 var random = [Math.floor(Math.random() * color.length)]
 var color2 = [
        '#0000ff',
        '#fff600',
        '#ff0000',
        '#fa00ff',
        '#4cff00',
        '#00ffe1',
        '#ffae00'
      ]
 var random2 = [Math.floor(Math.random() * color.length)]
	const canvas = Canvass.createCanvas(780, 250);
	const ctx = canvas.getContext('2d');

	
  const background = await Canvass.loadImage(`${imageArray[cuddle]}`);
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#00d4ff';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	// Slightly smaller text placed above the member's display name
	ctx.font = '50px sans-serif';
	ctx.fillStyle = `${color[random]}`;
	ctx.fillText(`Goodbye!`, canvas.width / 2.5, canvas.height / 3.5);

	// Add an exclamation point here and below
	ctx.font = applyText(canvas, `${member.displayName}!`);
	ctx.fillStyle = `${color2[random2]}`;
	ctx.fillText(`   ${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8);

      let bots = guild.members.filter(m => m.user.bot).size
      let members = member.guild.memberCount
  ctx.font = 'bold 24px DejaVu';
  ctx.fillStyle = '#ffff00';
  ctx.fillText(`: ${members} Member`, canvas.width / 2.82, canvas.height / 1.25);
      
  ctx.font = 'bold 24px DejaVu';
  ctx.fillStyle = '#ffff00';
  ctx.fillText(` : ${bots} Bots`, canvas.width / 1.45, canvas.height / 1.25);
      


	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const { body: buffer } = await snekfetch.get(member.user.displayAvatarURL);
	const avatar = await Canvass.loadImage(buffer);
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.Attachment(canvas.toBuffer(), 'leaveserver-image.png');


	channel.send(`**${member.displayName}** has left **${guild.name}**,In Server has **${member.guild.memberCount}** Member `, attachment);
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
