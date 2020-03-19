const Discord = require("discord.js");

exports.run = (client, message, Discord, prefix) => {

   if(command === "prserver") {
      message.delete(1000);
    
      let member = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
     if(!message.member.hasPermission("ADMINISTRATOR"))
          return message.reply("You Dont Have Permission");
     // let DMALL = args.join(" ").slice(0);
      let Message = args.join(" `Please Help Me Share This Links/Server To Your Friend , Thank You ! <3\n\n► https://discord.gg/ZWWD7zT`").slice(0);
   // if (!DMALL) return message.channel.send(""+message.member+" Please Enter Your Text To Dm Player From Server");

    message.guild.members.forEach((player) => {
        message.guild.member(player).send({embed: {      
          color: 0xffffff,
       //   Author: `${mess`,
          title: `► ANNOUNCEMENT`,
          description: `${Message}`

        }});
    });

    message.channel.send("<@"+message.author.id+"> Your Dm Has Been Send To Player !").then(m => m.delete(1000));


};
}
