// Require the necessary discord.js classes
const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const fetch = require('node-fetch');
const url = 'https://api.chucknorris.io/jokes/random';


// fetch(url, settings)
// 	.then(res => res.json())
// 	.then((json) => {
// 		json;
// 	});

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log(client.user.tag);
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Pong!');
	}
	else if (commandName === 'server') {
		await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
	}
	else if (commandName === 'user') {
		await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`);
	}
	else if (commandName === 'lukamagaria') {
		await interaction.reply('aba raa dzmao');
	}
	else if (commandName === 'joke') {
		await fetch(url)
			.then(res => res.json())
			.then(json => interaction.reply(json.value));

	}
});

// Login to Discord with your client's token
client.login(token);