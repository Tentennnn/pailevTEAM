const Discord = require('discord.js'),
const send = require('quick.hook');
const snekfetch = require('snekfetch');


exports.run = (clinet, message, Discord, args, prefix) => {
message.delete()
if(args[0] == "help"){
  message.channel.send("**Enter • <YTUsername> <VideoURL>**").then(msg => msg.delete(11000));
    return;
  }
  let txt = args[0]; 
  let pictureURL = args[1];
 
    send(message.channel, {//`📌 @here\n\nUsername ● **${txt}** Has Upload Video From YouTube !\n\n${pictureURL} __**Go Check Now**__`, {
        name: 'PICTURE :',
        icon: 'https://discordapp.com/channels/430630483408453633/690183762633424927/690493280953303040',
        image: {
		        url: '${pictureURL}'
    })
}
