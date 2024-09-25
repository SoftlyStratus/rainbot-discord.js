const { SlashCommandBuilder } = require('discord.js');
const { execute } = require('./ping');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('userinfo')
        .setDescription('Fetches inforomation about the user'),
    async execute(interaction) {
        const user = interaction.user;
        await interaction.reply(`Your username: ${user.username}\nYour ID: ${user.id}`);

    },
};