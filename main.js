//Import libraries
const fs = require('node:fs');
const { Collection, VoiceState } = require('discord.js')
const { Client, Intents, MessageEmbed } = require('discord.js');
//Make a new Client with given Intents
const client = new Client({ intents: [Intents.FLAGS.GUILDS, 
    Intents.FLAGS.GUILD_MESSAGES, 
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS, 
    Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_BANS, 
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILDS] });
//If the bot is online the bots tag will be send in the console and the bots activity will be set as PLAYING ?commands
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("?commands", { type: "PLAYING" });
});
//Set prefix to ? and makes a new Collection as Client.commands
const prefix = '?';
client.commands = new Collection();

["command-handler"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});
//If the bot is online it will check for messages
client.on('messageCreate', message => {
    //Checks if the bot send the message
    if (message.author.bot) return;
    //Checks if it was send in a server 
    if (!message.guild) return;
    //Checks in the message that was send starts with the prefix ?
    if (!message.content.startsWith(prefix)) return;

    //Makes an array of the message and splits it at a space
    const args = message.content
        .slice(prefix.length)
        .trim()
        .split(/ +/g);
    const cmd = args.shift().toLowerCase();
    //Checks if the command is a lenght of 0 letters long
    if (cmd.length === 0) return;
    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd))
    if (command) command.run(client, message, args);
});
channelID = 841109858334015548
client.on('voiceStateUpdate', (oldState, newState) => {
    console.log(oldState.roles)
    console.log(VoiceState)
    newState.disconnect()
});
//Runs the code on the bot that is connected with the token
const login = require('./secret.json');
client.login(login.token);