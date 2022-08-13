// Require the necessary discord.js classes
const { Client, GatewayIntentBits } = require('discord.js');

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
require('dotenv').config();
const fetch = require('node-fetch');
const url = 'https://v2.jokeapi.dev/joke/Any';


// fetch(url, settings)
// 	.then(res => res.json())
// 	.then((json) => {
// 		json;
// 	});
fetch(url)
	.then(res => res.json())
	.then(json => console.log(json));

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
			.then(json => {
				let res = '';
				if (json.type === 'twopart') {
					res = json.setup + '\n' + json.delivery;
				}
				else {
					res = json.joke;
				}
				interaction.reply(res);
			});

	}
});

// Login to Discord with your client's token
client.login(process.env.BOT_TOKEN);