const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.js");

const keepAlive = require('./keepAlive.js');

client.on('ready', () => {
    console.log(`${client.user.tag} is ready.\n\n-\n\n`);
});

client.on("message", (message) => {
    if (message.author.bot) return
    if (message.channel.id === config.channel) {
    const fetch = require("node-fetch").default;

    fetch(`https://api.snowflakedev.org/api/chatbot?message=${encodeURIComponent(message.content)}&name=${config.botname}`, {
        headers: {
            "Authorization": config.authorization
        }
    }).then(res => res.json()).then(data => {
        message.channel.send(data.message);
    }).catch(e => console.error('An error has occurred. Please make sure that you provide the correct information in the configuration file.'));
    }

console.log(`Message from ${message.author.tag} - ${message.content}`)});

keepAlive();

client.login(config.token).catch(() => console.log("Invalid token."));
