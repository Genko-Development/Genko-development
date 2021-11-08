const Discord = require('discord.js');

const client = new Discord.Client();

// const { createAudioPlayer } = require('@discordjs/voice');
// const { joinVoiceChannel } = require('@discordjs/voice');

//To do list:
//ranking command: ?upgrade @target
//weekly goat: random person that is the goat of the weak
//sad vibes message: sends message to cheer up person in sad vibes
//poll system: ?poll (poll)
//spamm plug

const prefix = '?';
const fs = require('fs');
const { execute } = require('./commands/ping');

client.commands = new Discord.Collection();


const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);

}


//online confirmation
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity("?commands", { type: "PLAYING" });

});

client.on('guildMemberAdd', guildMember => {
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'viewer');

    guildMember.roles.add(welcomeRole);

    guildMember.guild.channels.cache.get('852875957441134623').send(`Welcome <@${guildMember.user.id}> to our server! Make sure to check out the rules channel!`)
});



client.on('message', message => {
    if (!message.content.startsWith(`${prefix}`) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();

    //all commands
    if (command === 'ping') {
        client.commands.get('ping').execute(message, args);
    } else if (command == 'website') {
        client.commands.get('website').execute(message, args);
    } else if (command === 'info') {
        client.commands.get('info').execute(message, args);
    } else if (command === 'rules') {
        client.commands.get('rules').execute(message, args);
    } else if (command === 'commands') {
        client.commands.get('commands').execute(message, args, Discord);
    } else if (command === 'join') {
        client.commands.get('join').execute(message, args, Discord);
    }
});

client.on('message', message => {
    if (!message.content.startsWith(`${prefix}`) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();

    //all staff commands
    if (command === 'clear') {
        client.commands.get('clear').execute(message, args);
    } else if (command === 'mute') {
        client.commands.get('mute').execute(message, args, );
    } else if (command === 'unmute') {
        client.commands.get('unmute').execute(message, args, );
    } else if (command === 'kick') {
        client.commands.get('kick').execute(message, args, );
    } else if (command === 'ban') {
        client.commands.get('ban').execute(message, args, );
    } else if (command === 'epic') {
        client.commands.get('epic').execute(message, args, );
    } else if (command === 'sleep') {
        client.commands.get('sleep').execute(message, args, );
    } else if (command === 'upgrade') {
        client.commands.get('upgrade').execute(message, args, );
    } else if (command === 'downgrade') {
        client.commands.get('downgrade').execute(message, args, );
    }
});


//chat filter
client.on('message', async message => {
    //1 blacklisted words
    let blacklisted = ['fuck', 'shit,', 'bullshit', 'bitch', 'asshole', 'cunt', 'virgin', 'discord.gg', 'kanker', 'aids', 'jood', ] //words
        //2 looking for words
    let foundInText = false;
    if (!message.member.hasPermission('MANAGE_MESSAGES')) {
        for (var i in blacklisted) { // loops through the blacklisted list
            if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) // checks casesensitive words
                foundInText = true;
        }
    }
    if (message.member.hasPermission('MANAGE_MESSAGES')) {
        return
    }
    //3 deletes and send message
    if (foundInText) {
        message.delete();
        message.channel.send('Hey! That word is not allowed!! :rage:').then(msg => {
                msg.delete({ timeout: 10000 })
            })
            .catch('message not send!');
    }
});



client.on('message', async message => {

    //1 blacklisted words
    let Leo = ['lmao']
    let blacklisted = ['kaas'] //words
    let kanker = ['jeroen??']
    let Pepijn = ['bloempot']
    let Tjeerd = ['Fix hypixel']
    let huts = ['huts']
        //2 looking for words
    let messageFound = false;
    let replyFound = false;
    let messageLeo = false;
    let messagePepijn = false
    let niffau = false
    let hypixel = false

    if (message.author.bot) return;

    for (var i in Tjeerd) {
        if (message.content.toLowerCase().includes(Tjeerd[i].toLowerCase()))
            hypixel = true;
    }
    if (hypixel) {
        message.channel.send('Tjeerd fix hypixel').then(msg => {
                msg.delete({ timeout: 5000 })
            })
            .catch('message not send!');
    }

    for (var i in huts) {
        if (message.content.toLowerCase().includes(huts[i].toLowerCase()))
            niffau = true;
    }
    if (niffau) {
        message.channel.send('a niffau').then(msg => {
                msg.delete({ timeout: 5000 })
            })
            .catch('message not send!');
    }

    for (var i in blacklisted) {
        if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase()))
            messageFound = true;
    }
    if (messageFound) {
        message.channel.send('Jeroen??').then(msg => {
                msg.delete({ timeout: 5000 })
            })
            .catch('message not send!');
    }

    for (var i in kanker) {
        if (message.content.toLowerCase().includes(kanker[i].toLowerCase()))
            replyFound = true;
    }
    if (replyFound) {
        (message.channel.send('Kaas')).then(msg => {
                msg.delete({ timeout: 5000 })
            })
            .catch('message not send!');
    }

    for (var i in Leo) {
        if (message.content.toLowerCase().includes(Leo[i].toLowerCase()))
            messageLeo = true;
    }
    if (messageLeo) {
        message.channel.send('Leo??').then(msg => {
                msg.delete({ timeout: 5000 })
            })
            .catch('message not send!');
    }

    for (var i in Pepijn) {
        if (message.content.toLowerCase().includes(Pepijn[i].toLowerCase()))
            messagePepijn = true;
    }
    if (messagePepijn) {
        message.channel.send('Pepijn??').then(msg => {
                msg.delete({ timeout: 5000 })
            })
            .catch('message not send!');
    }
});






client.login('ODUyNjUxMjEzOTExNDkwNjMx.YMJ7Ug.bqghxQSuYkB2o8XyjYbKWVeaJHQ');