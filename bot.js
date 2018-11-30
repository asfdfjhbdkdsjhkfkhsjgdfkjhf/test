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
ARAB.login(process.env.t1);

const ARAB2 = new Discord.Client();


	ARAB2.on("ready", () => {
let channel =     ARAB2.channels.get("515208908415959059")
setInterval(function() {
channel.send(`DDDDDDDD`);
}, 15)
})

ARAB2.on('message', message => {
    let prefix = 'v1';
   if(message.content.startsWith('v1say')) {
       let args = message.content.split(' ').slice(1).join(' ');
       message.channel.send(args)
   } 
});
ARAB2.on('message', message => {
     if (message.content === "!av-set") {
ARAB2.user.setAvatar(`https://cdn.discordapp.com/attachments/480884525505839104/515234980612538368/006.jpg`)
 
}
});	
ARAB2.login(process.env.t2);

