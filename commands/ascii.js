const Discord = require('discord.js'),
      cheerio = require('cheerio'),
      Chance = require('chance'),
      random = new Chance(),
      parseArgs = require('minimist'),  
      arraySort = require('array-sort'), 
      table = require('table'), 
      querystring = require('querystring'),
      send = require('quick.hook');
const config = require("./config");
const fs = require("fs");
const client = new Discord.Client();
const ms = require("ms");
const encode = require('strict-uri-encode');
const snekfetch = require('snekfetch');
const superagent = require("superagent");
const meme = require('memejs');
const yoMamma = require('yo-mamma').default;
const snek = require('snekfetch');
const twemoji = require('twemoji');
const ownerID = ["356510829920780289", "424916247696900135"];
const gifSearch = require("gif-search");
const figlet = require('figlet');
const moment = require('moment');
               require("moment-duration-format");
const { get } = require('request-promise-native');

      

exports.run = async (bot, message, args, tools) => {
   
   //    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
       //const command = args.shift().toLowerCase(); 
       var args = message.content.split(' ').slice(1);

  if(args.join(' ').length > 14) return message.channel.send('Only 14 characters are admitted!') 
  if (!args.join(' ')) return message.channel.send('Please, provide text to format in ASCII! Usage: ascii <text>').then(msg => msg.delete({timeout: 10000})); 
    figlet(args.join(' '), (err, data) => {
      message.channel.send('```' + data + '```')
    })
};
