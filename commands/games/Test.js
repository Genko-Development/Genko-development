const axios = require('axios').default;
const { MessageEmbed } = require('discord.js');
const apexkey = require('../../token.json');

module.exports = {
    name: 'test',
    description: "",
    usage: 's',
    category: 'games',
    run: async(client, message, args) => {
//         const exampleEmbed = new MessageEmbed()
// 	.setColor('#0099ff')
// 	.setTitle('Some title')
// 	.setURL('https://discord.js.org/')
// 	.setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
// 	.setDescription('Some description here')
// 	.setThumbnail('https://i.imgur.com/AfFp7pu.png')
// 	.addFields(
// 		{ name: 'Regular field title', value: 'Some value here' },
// 		{ name: '\u200B', value: '\u200B' },
// 		{ name: 'Inline field title', value: 'Some value here', inline: true },
// 		{ name: 'Inline field title', value: 'Some value here', inline: true },
// 	)
// 	.addField('Inline field title', 'Some value here', true)
// 	.setImage('https://i.imgur.com/AfFp7pu.png')
// 	.setTimestamp()
// 	.setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

// message.channel.send(exampleEmbed);
// return
    const challenger = message.author;
    const oppenent = message.mentions.users.first();
    const initial = new MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Attack panel')
    .setAuthor({ name: 'Some name'})
    .setDescription('Some description here')
    .addFields({ name: 'AtackThree', value: 'Some value here' })
    .setTimestamp()
    message.channel.send(initial).then(gameMessage => {

        gameMessage.react("1️⃣")
        gameMessage.react("2️⃣")
        gameMessage.react("3️⃣")
        gameMessage.react("4️⃣")
        gameMessage.react("5️⃣")
        gameMessage.react("6️⃣")
        gameMessage.react("7️⃣")

        const gameFilter = (reaction, user) => ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣"].includes(reaction.emoji.name)  && (user.id === client.user.bot || user.id === challenger.id);
        
        const gameCollector = gameMessage.createReactionCollector({ filter: gameFilter });


            gameCollector.on("collect", (reaction, user) => {

                reaction.message.reactions.cache.get(reaction.emoji.name).users.remove(user.id);

                if (user.id === MemberId) {
                    switch (reaction.emoji.name) {
                        case "1️⃣":
                            console.log("nummer1")
                            break;
                        case "2️⃣":
                            console.log("nummer2")
                            break;
                        case "3️⃣":
                            console.log("nummer3")
                            break;
                    }
                }
            })
            
        })
        .catch(error => {
            console.log(error)
            message.channel.send('Timeout');
        });
}}
