const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("522076287611830282")
setInterval(function() {
channel.send(`akramtmdz`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
