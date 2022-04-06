const fs = require('node:fs');
const { Collection } = require('discord.js')
const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, 
    Intents.FLAGS.GUILD_MESSAGES, 
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS, 
    Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_BANS, 
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILDS] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("?commands", { type: "PLAYING" });
});

const prefix = '?';
client.commands = new Collection();

["command-handler"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.on('messageCreate', message => {
    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;


    const args = message.content
        .slice(prefix.length)
        .trim()
        .split(/ +/g);
    const cmd = args.shift().toLowerCase();


    if (cmd.length === 0) return;

    let command = client.commands.get(cmd);


    if (!command) command = client.commands.get(client.aliases.get(cmd))

    if (command) command.run(client, message, args);
});

const login = require('./secret.json');
client.login(login.token);