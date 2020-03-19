const Discord = require('discord.js');
const snekfetch = require('snekfetch');

exports.run = (client, message, Discord, prefix) => {   

    let target = message.mentions.users.first() || message.author;
   // let wait = await message.channel.send('Adding Magik Picture ........')

    let userAvatar = (target.displayAvatarURL);
    if (['jpg', 'jpeg', 'gif', 'png', 'webp'].some(x => args.join(' ').includes(x))) {
        userAvatar = args.join(' ').replace(/gif|webp/g, 'png')
    }

    let res = await snekfetch.get(`https://discord.services/api/magik?url=${userAvatar}`)

           // await wait.delete()

            const magikEmbed = new Discord.RichEmbed() 
                .setImage(`https://discord.services/api/magik?url=${userAvatar}`); 
            return message.channel.send(magikEmbed) 

}
