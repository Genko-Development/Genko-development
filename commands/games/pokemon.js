const axios = require('axios').default;
const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
// Math.floor((Math.random() * 10) + 1);
module.exports = {
    name: 'pokemon',
    usage: "pokemon <Pokemon name>",
    category: "games",
    run: async(client, message, args) => {
        MemberId = message.author.id
        console.log(MemberId)
        await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=1126`)
            .then((response) => {
                check(response.data, args, message, client);
            }).catch((error) => {
                console.log(error)
            })
            
            
        // if(reaction.message.guild.members == MemberId){
        //     console.log("wow")
        // }

    }
}
function check(data, args, message) {
    for (let i = 0; i < data.results.length; i++) {
        let pokemonName = data.results[i].name;
        str = args[0].replace(/\s+/g, '-').toLowerCase();
        if (pokemonName == str) {
            message.channel.send("Ready!")
            found = true
            console.log(data.results[i])
            AtackMessage(data.results[i], message, args)
            break;
        } else {
            found = false
        }
    }
    if(found == false){
        message.channel.send("That is not a real pokemon")
    }
}


// iconURL: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${PokemonID}.png`, url: 'https://discord.js.org'
function AtackMessage(data, message, args) {
    // let Id = data.url.split('/');
    // fotoId = Id[6]
    // console.log(Id[6])
    // await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=1126`)
    // .then((response) => {
    //     // console.log(response)
    //     // console.log(response.typnnes.typename)
    //     // random = Math.floor((Math.random() * response.moves.move) + 1);
    //     // console.log(random)
    // }).catch((error) => {
    //     console.log(error)
    // })


    const initial = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Attack panel')
        .setAuthor({ name: 'Some name'})
        .setDescription('Some description here')
        .setThumbnail(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${fotoId}.png`)
        .addFields({ name: 'AtackOne', value: 'Some value here' })
        .addFields({ name: 'AtackTwo', value: 'Some value here' })
        .addFields({ name: 'AtackThree', value: 'Some value here' })
        .setTimestamp()
        .setFooter({ text: '?pokemon' })
    message.channel.send({ embeds: [initial] }).then(async function(Gamemessage) {
            message.react("1️⃣")
            message.react("2️⃣")
            message.react("3️⃣")

            const validReactionFilter = (reaction, user) => ["1️⃣", "2️⃣"]
            .includes(reaction.emoji.name) && user.bot === false;
            // const gameFilter = (reaction, user) => reaction.emoji.name === '1️⃣' && !user.bot; 
            // ["1️⃣", "2️⃣", "3️⃣"].includes(reaction.emoji.name) && (user.id === oppenent.id || user.id === challenger.id);

            const gameCollector = Gamemessage.createReactionCollector({ filter: validReactionFilter });

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
}


// async function AtackInformation(data){
    
// }