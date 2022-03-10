

const Discord = require('discord.js');

const client = new Discord.Client();

// To do list:
// [x] - ranking command: ?upgrade @target
// [ ] - weekly goat: random person that is the goat of the weak
// [-] - sad vibes message: sends message to cheer up person in sad vibes
// [ ] - poll system: ?poll (poll)
// [ ] - spamm plug
// [-] - music bot common commands, stop, skip etc.
// [x] - music queue command
// [ ] - potential Apex Legends API integration
// [ ] - Potential Minecraft Hypixel API integration - common stats
// [x] - Random legend chooser
// [x] - Random map location chooser
// [ ] - common modaration commands
// [x] - Genshin chracter info with api
// [ ] - Genshin artifact info with api
// [ ] - Genshin best character artifact build


const prefix = '?';
const fs = require('fs');
// const { execute } = require('./commands/ping');

client.commands = new Discord.Collection();



["command-handler"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});
// const commandFiles = fs.readdirSync('./handlers/').filter(file => file.endsWith('.js'))
// for (const file of commandFiles) {
//     const command = require(`./handlers/${file}`);

//     client.commands.set(command.name, command);

// }


//online confirmation
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity("?commands", { type: "PLAYING" });


    const { Player } = require("discord-music-player");
    const player = new Player(client, {
        leaveOnEmpty: false,
    });

    client.player = player;

    new Player(client, {
        leaveOnEnd: true,
        leaveOnStop: true,
        leaveOnEmpty: true,
        timeout: 10,
        volume: 150,
        quality: 'high',
    });

});

client.on('guildMemberAdd', guildMember => {
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'viewer');

    guildMember.roles.add(welcomeRole);

    guildMember.guild.channels.cache.get('852875957441134623').send(`Welcome <@${guildMember.user.id}> to our server! Make sure to check out the rules channel!`)
});


client.on('message', message => {
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


    // if (!command) command = client.commands.get(client.aliases.get(cmd))

    if (command) command.run(client, message, args);
});
// client.on('message', message => {

// })
client.on('voiceStateUpdate', (newMember, newstate) => {
    let userid = newMember.member.user.id
    const textChannel = client.channels.cache.get('842518619639382037');
    if (newstate.channelID == "841109858334015548") {
        textChannel.send(`<@${userid}> is in depressie sesie join him`)
    }
    // if(oldMember.voiceChannel === undefined && newMember.voiceChannel !== undefined){

    // }
});


// //chat filter
// client.on('message', async message => {
//     //1 blacklisted words
//     let blacklisted = ['fuck', 'shit,', 'bullshit', 'bitch', 'asshole', 'cunt', 'virgin', 'discord.gg', 'kanker', 'aids', 'jood', ] //words
//         //2 looking for words
//     let foundInText = false;
//     if (!message.member.hasPermission('MANAGE_MESSAGES')) {
//         for (var i in blacklisted) { // loops through the blacklisted list
//             if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) // checks casesensitive words
//                 foundInText = true;
//         }
//     }
//     if (message.member.hasPermission('MANAGE_MESSAGES')) {
//         return
//     }
//     //3 deletes and send message
//     if (foundInText) {
//         message.delete();
//         message.channel.send('Hey! That word is not allowed!! :rage:').then(msg => {
//                 msg.delete({ timeout: 10000 })
//             })
//             .catch('message not send!');
//     }
// });



// client.on('message', async message => {

//     //1 blacklisted words
//     let Leo = ['lmao']
//     let blacklisted = ['kaas'] //words
//     let kanker = ['jeroen??']
//     let Pepijn = ['bloempot']
//     let Tjeerd = ['Fix hypixel']
//     let huts = ['huts']
//         //2 looking for words
//     let messageFound = false;
//     let replyFound = false;
//     let messageLeo = false;
//     let messagePepijn = false
//     let niffau = false
//     let hypixel = false

//     if (message.author.bot) return;

//     for (var i in Tjeerd) {
//         if (message.content.toLowerCase().includes(Tjeerd[i].toLowerCase()))
//             hypixel = true;
//     }
//     if (hypixel) {
//         message.channel.send('Tjeerd fix hypixel').then(msg => {
//                 msg.delete({ timeout: 5000 })
//             })
//             .catch('message not send!');
//     }

//     for (var i in huts) {
//         if (message.content.toLowerCase().includes(huts[i].toLowerCase()))
//             niffau = true;
//     }
//     if (niffau) {
//         message.channel.send('a niffau').then(msg => {
//                 msg.delete({ timeout: 5000 })
//             })
//             .catch('message not send!');
//     }

//     for (var i in blacklisted) {
//         if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase()))
//             messageFound = true;
//     }
//     if (messageFound) {
//         message.channel.send('Jeroen??').then(msg => {
//                 msg.delete({ timeout: 5000 })
//             })
//             .catch('message not send!');
//     }

//     for (var i in kanker) {
//         if (message.content.toLowerCase().includes(kanker[i].toLowerCase()))
//             replyFound = true;
//     }
//     if (replyFound) {
//         (message.channel.send('Kaas')).then(msg => {
//                 msg.delete({ timeout: 5000 })
//             })
//             .catch('message not send!');
//     }

//     for (var i in Leo) {
//         if (message.content.toLowerCase().includes(Leo[i].toLowerCase()))
//             messageLeo = true;
//     }
//     if (messageLeo) {
//         message.channel.send('Leo??').then(msg => {
//                 msg.delete({ timeout: 5000 })
//             })
//             .catch('message not send!');
//     }

//     for (var i in Pepijn) {
//         if (message.content.toLowerCase().includes(Pepijn[i].toLowerCase()))
//             messagePepijn = true;
//     }
//     if (messagePepijn) {
//         message.channel.send('Pepijn??').then(msg => {
//                 msg.delete({ timeout: 5000 })
//             })
//             .catch('message not send!');
//     }
// });

const login = require('./token.json');
client.login(login.token);