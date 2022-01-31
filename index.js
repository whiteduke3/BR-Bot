// Require the necessary discord.js classes
const { Client, Intents, Discord } = require('discord.js');
//const { token } = require('./config.json');
require('dotenv').config();


// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

const dejan = [
    "Ako ga lipsa",
    "Kad se oće pa lijevo",
    "Gdje si Dejane Dvojinovicu",
    "Šta su piščanci koji k",
    "Odo ja da pišam"


];

const ademir = [
    "Uhljebi",
    "Ma jarane samo lagano",
    "Baza ce biti u 1NO",
    "Eh mozete li mi ovo zacas objasniti",
    "Ja bih volio da padnem da mogu sjest i naucit ovo"

];



client.on('messageCreate', msg => {
    if(msg.channelId === "691309538930065492" && msg.content.toLowerCase().trim() === "!dejan") {
        let index = Math.floor(Math.random() * dejan.length);
        msg.channel.send(dejan[index]);
    }

    if(msg.channelId === "691309538930065492" && msg.content.toLowerCase().trim() === "!ademir") {
        let index2 = Math.floor(Math.random() * ademir.length);
        msg.channel.send(ademir[index2]);
    }
    console.log(msg);
});

// Login to Discord with your client's token
client.login(process.env.DISCORD_TOKEN);