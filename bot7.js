const Discord = require("discord.js");

const ARAB = new Discord.Client();


	ARAB.on("ready", () => {
let channel =     ARAB.channels.get("515208908415959059")
setInterval(function() {
channel.send(`DDDDDDDD`);
}, 15)
})

ARAB.on('message', message => {
    let prefix = 'v1';
   if(message.content.startsWith('v1say')) {
       let args = message.content.split(' ').slice(1).join(' ');
       message.channel.send(args)
   } 
});
ARAB.on('message', message => {
     if (message.content === "!av-set") {
ARAB.user.setAvatar(`https://cdn.discordapp.com/attachments/480884525505839104/515234980612538368/006.jpg`)
 
}
});	
ARAB.login(process.env.t8);
