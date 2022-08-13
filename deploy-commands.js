const { SlashCommandBuilder, Routes } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { clientId, guildId } = require('./config.json');
require('dotenv').config();

const commands = [
	new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!'),
	new SlashCommandBuilder().setName('server').setDescription('Replies with server info!'),
	new SlashCommandBuilder().setName('user').setDescription('Replies with user info!'),
	new SlashCommandBuilder().setName('lukamagaria').setDescription('Replies with pong!'),
	new SlashCommandBuilder().setName('joke').setDescription('Replies with pong!'),
]
	.map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(process.env.BOT_TOKEN);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);