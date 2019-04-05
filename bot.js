const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("563656565480226820")
setInterval(function() {
channel.send(`5kim dkaldk3kal 3uask 3918ska`);
}, 30)
})

client.login(process.env.BOT_TOKEN);