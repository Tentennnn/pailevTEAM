const Discord = require("discord.js");

exports.run = (client, message, Discord, prefix) => { 

   var footertext = [`${client.user.username}: oof sexy`, `${client.user.username}: nice`, `${client.user.username}: 🔥`, `${client.user.username}: Someone's looking sharp today!`, `${client.user.username}: oof if i wasn't a bot...`, `${client.user.username}: looking sexier than a mug`];
    var rand = Math.floor(Math.random() * footertext.length);
    var randomfooter = footertext[rand]; //THIS AND THE TWO LINES ABOVE IS TOTALLY UNNECESSARY. But you want to make your bot more interactive so keep it.Just an array of some random shit, you can add more if you would like just read the code and change it at your will! 


    message.delete();

    message.channel.startTyping(); // TELLS YOUR HANDICAPPED BOT TO START TYPING! ;)


  //  let msg =  message.channel.send('``Generating that sexy avatar...``') //UNNECESSARY BUT COOL.

    let user = message.mentions.users.first() || message.author; //THIS IS IMPORTANT BECAUSE YOU WANT YOUR BOT TO SHOW OTHER PEOPLE'S AVATAR AS WELL BY MENTIONING THEM!

    // AVATAR EMBED

    let embed = new Discord.RichEmbed() //HERE WE DEFINE THE EMBED
        .setAuthor(`${user.username}'s Avatar`) //HERE WE SHOW THE USER'S NAME!
        .setImage(user.displayAvatarURL) // USER'S AVATAR
        .setColor('RANDOM') //SET THE EMBED COLOR TO THE HIGHEST ROLE COLOR THE BOT HAS! cool right :D
        .setFooter(`${randomfooter}`) //FOOTER AND ICON
        .setTimestamp(); //SHOWS THAT COOL TIME ON THE FOOTER!

     message.channel.send(embed) //NOW WE GIVE IT SOMETIME TO DO ALL THE CRAZY STUFF ON TOP AND THEN SEND THE EMBED!

    message.channel.stopTyping(true); // TELLS YOUR HANDICAPPED BOT TO STOP TYPING! ;)

}
