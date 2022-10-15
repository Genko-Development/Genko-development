const { MessageEmbed } = require("discord.js");
const fs = require('fs')
const axios = require('axios').default;
module.exports = {
    name: 'pokemon',
    cooldown: 0,
    description: 'testing',
    usage: 'idk',
    category: 'games',
    run: async(client, message, args) => {
        MemberId = message.author.id
        console.log(MemberId)
        img = ''
        moves = []
        found = false
        // var seq = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
        // console.log(seq);
        // var digits = (""+seq).split("");
        // console.log(digits);
        //Api call to check if the pokemon they submited exists
        await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=1126`)
            .then((response) => {
                for (let i = 0; i < response.data.results.length; i++) {
                    let pokemonName = response.data.results[i].name;
                    str = args[0].replace(/\s+/g, '-').toLowerCase();
                    if (pokemonName == str) {
                        message.channel.send("Ready!")
                        found = true
                        // console.log(response.data.results[i])
                        Url = response.data.results[i].url
                        break;
                    } else {
                        found = false
                    }
                }
                if(found == false){
                    message.channel.send("That is not a real pokemon")
                }
            }).catch((error) => {
                console.log(error)
            })
        //Api call to url to get a image of the pokemon
        await axios.get(Url)
        .then((response) => {
            data = response.data
            img = data.sprites.front_default
            for (let i = 0; i < response.data.results.length; i++) {
                let pokemonName = response.data.results[i].name;
                str = args[0].replace(/\s+/g, '-').toLowerCase();
            }
        }).catch((error) => {
            console.log(error)
        })
        if(found){
        //Making the message 
        const initial = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Attack panel')
            .setAuthor({ name: message.author.tag})
            .setDescription('Some description here')
            .setThumbnail(img)
            .addFields({ name: 'AtackOne', value: '.' })
            .addFields({ name: 'AtackTwo', value: '.' })
            .addFields({ name: 'AtackThree', value: '.' })
            .setFooter({ text: '?pokemon' })
        //Sends the message with emojis
        message.channel.send({ embeds: [initial] }).then(gameMessage => {
            gameMessage.react("1️⃣")
            gameMessage.react("2️⃣")
            gameMessage.react("3️⃣")
            //Makes a filter that wil check for the input of the given emojis 
            const validReactionFilter = (reaction, user) => ["1️⃣", "2️⃣","3️⃣"]
                .includes(reaction.emoji.name) && user.bot === false;

            const reactCollector = gameMessage.createReactionCollector({ filter: validReactionFilter });
            //Runs the code for the emoji that is pressed
            reactCollector.on("collect", (reaction, user) => {
                reaction.message.reactions.cache.get(reaction.emoji.name).users.remove(user.id);
                switch (reaction.emoji.name) {
                    case "1️⃣":
                        message.channel.send(`**1**`).then(msg => {
                            setTimeout(() => msg.delete(), 5000);
                        });
                        break;
                    case "2️⃣":
                        message.channel.send(`**2**`).then(msg => {
                            setTimeout(() => msg.delete(), 5000);
                        });
                        break;
                    case "3️⃣":
                        message.channel.send(`**3**`).then(msg => {
                            setTimeout(() => msg.delete(), 5000);
                        });
                        break;
                }
            });
        })}
    }
}
