const { execute } = require("../client/ready");

module.exports = {
    name: 'messageCreate',
    once: false, // indicates the event will run multiple times
    execute(message, client) {
        // Ignores messages from the bot itself
        if (message.author.bot) return;
    }
}