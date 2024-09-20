const { Client, GatewayIntentBits } = require('discord.js');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Create a new client instance
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
});

// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log('Ready! Logged in as ' + client.user.tag);
});

// Listen for messages
client.on('messageCreate', message => {
    if (message.author.bot) return; // Ignore messages from bots

    if (message.content.toLowerCase() === '!ping') {
        message.reply('Pong!');
    }
});

// Login to Discord with your client's token
client.login(process.env.DISCORD_TOKEN);
