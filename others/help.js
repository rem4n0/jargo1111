const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);
const db = require('quick.db');

module.exports = {
  name: "help",
  aliases: ["h"],
  cooldown: 1.5,
  description: "",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setImage(`https://cdn.discordapp.com/attachments/832678897434230864/833341017125683200/standard_15.gif`)
    .setColor("#FC00FF")
    .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
    .setAuthor("𝗕𝗘𝗦𝗧 𝗺𝘂𝘀𝗶𝗰✨", "https://images-ext-2.discordapp.net/external/_NOx5XTb-8-Fr5oR11oNPAAD7bfMyym5URJtCmZo4Og/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/910671479576862721/f1d551e059335ab31e9a0b8933f67a67.png")
    .setDescription(` 
 **| User Commands**
> \`invite . invites . support . about   avatar . ping . prefix . uptime  . vote . se . serverinfo   servericon(icon) . userinfo(user)   emojify . emojiinfo(emoji) . social   membercount(count)\`

 
 **| Fun Commands**
> \`lock(l) . unlock(ul) . slowmode . ban   bans . unban . createchannel   deletechannel   mute . unmute   giveaway . embed . say . cv\`



**| Gif Commands**
> \`boy . girl . baby . smoke\` 


< **| Game Commands**
> \`slap . hug\`

 **| Music Commands**
> \`play . skip . skipto . stop . volume   nowplaying . shuffle . search . resume   remove . queue . filter . loop   lyrics . radio\` 



 **| Links**
__**[Support](https://discord.gg/gPP8GgQNfB)**____ __**[Invite](https://discord.com/api/oauth2/authorize?client_id=910671479576862721&permissions=8&scope=bot)**__ **-** __()__
`)
   helpEmbed
   message.react("✅")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
