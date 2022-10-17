const { MessageEmbed } = require("discord.js");
const fs = require('fs')
const axios = require('axios').default;
module.exports = {
    name: 'gamble',
    cooldown: 0,
    description: 'try your luck',
    usage: 'idk',
    category: 'games',
    run: async(client, message, args) => {
        //random number between 1 and 10
        var RandomNumber = (Math.floor(Math.random() * 10) + 1)
        const emojiList = ['1️⃣' , '2️⃣' , '3️⃣' , '4️⃣' , '5️⃣' , '6️⃣' , '7️⃣' , '8️⃣' , '9️⃣' , '🔟'];

        if(args[0] <= 1 || args[0] >= 10 || args[0] == undefined) return;

        const initial = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Gamble Panel')
        .setAuthor({ name: message.author.tag})
        .setDescription('Choose a number')
        .addFields({ name: 'Input Value', value: args[0] })
        .setFooter({ text: '?gamble' })

        //Sends the message with emojis
        message.channel.send({ embeds: [initial] }).then(gameMessage => {
            for (let index = 0; index < args[0]; index++) {

                gameMessage.react(emojiList[index]);
                
            }

            
            //Makes a filter that wil check for the input of the given emojis 
            const validReactionFilter = (reaction, user) => ["1️⃣", "2️⃣","3️⃣"]
                .includes(reaction.emoji.name) && user.bot === false;

            const reactCollector = gameMessage.createReactionCollector({ filter: validReactionFilter });
            //Runs the code for the emoji that is pressed
            reactCollector.on("collect", (reaction, user) => {
                reaction.message.reactions.cache.get(reaction.emoji.name).users.remove(user.id);
                switch (reaction.emoji.name) {
                    case "1️⃣":
                        Message(message,RandomNumber,1)
                        break;
                    case "2️⃣":
                        Message(message,RandomNumber,2)
                        break;
                    case "3️⃣":
                        Message(message,RandomNumber,3)
                        break;
                    case "4️⃣":
                        Message(message,RandomNumber,4)
                        break;
                    case "5️⃣":
                        Message(message,RandomNumber,5)
                        break;
                    case "6️⃣":
                        Message(message,RandomNumber,6)
                        break;
                    case "7️⃣":
                        Message(message,RandomNumber,7)
                        break;
                    case "8️⃣":
                        Message(message,RandomNumber,8)
                        break;
                    case "9️⃣":
                        Message(message,RandomNumber,9)
                        break;
                    case "🔟":
                        Message(message,RandomNumber,10)
                        break;
                }
            });
        })
    }
}

function Message(message,RandomNumber,input){
    if( input == RandomNumber){
        message.channel.send('You won').then(msg => {
            setTimeout(() => msg.delete(), 5000);
        });
    }else{
        message.channel.send('You lost').then(msg => {
            setTimeout(() => msg.delete(), 5000);
        });
    }
}
