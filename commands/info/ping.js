const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with the bots api latency.'),
    async execute(interaction) {
        await interaction.reply('Pong!');
    }
};