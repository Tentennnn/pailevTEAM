const Discord = require('discord.js'),
    arraySort = require('array-sort'),
    table = require('table');

      

exports.run = async (bot, message, args, tools) => {
   
       const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
       const command = args.shift().toLowerCase(); 
  if(args.join(' ').length > 14) return message.channel.send('Only 14 characters are admitted!') 
  if (!args.join(' ')) return message.channel.send('Please, provide text to format in ASCII! Usage: ascii <text>').then(msg => msg.delete({timeout: 10000})); 
    figlet(args.join(' '), (err, data) => {
      message.channel.send('```' + data + '```')
    })
};
