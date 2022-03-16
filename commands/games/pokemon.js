const axios = require('axios').default;
const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')

module.exports = {
    name: 'pokemon',
    usage: "pokemon <Pokemon name>",
    category: "games",
    run: async(client, message, args) => {
        await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=1126`)
            .then((response) => {
                check(response.data, args, message, client);
            }).catch((error) => {
                console.log(error)
            })
            // Math.floor((Math.random() * 10) + 1);
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
            if(found == true)
            {
            }
        }
    }
}
// iconURL: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${PokemonID}.png`, url: 'https://discord.js.org'
function AtackMessage(data, message, args) {
    AtackInformation(data)
    const attackEmbed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Attack panel')
        .setAuthor({ name: 'Some name'})
        .setDescription('Some description here')
        .setThumbnail(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${fotoId}.png`)
        .addFields({ name: 'Regular field title', value: 'Some value here' }, { name: '\u200B', value: '\u200B' }, { name: 'Inline field title', value: 'Some value here', inline: true }, { name: 'Inline field title', value: 'Some value here', inline: true }, )
        .addField('Inline field title', 'Some value here', true)
        .setTimestamp()
        .setFooter({ text: '?pokemon' });
    message.channel.send(attackEmbed).then(async function(message) {
            message.react("1️⃣")
            message.react("2️⃣")
            message.react("3️⃣")
        })
        .catch(error => {
            console.log(error)
            message.channel.send('Timeout');
        });
}


async function AtackInformation(data){
    let Id = data.url.split('/');
    fotoId = Id[6]
    console.log(Id[6])
    axios.get(data.url)
    .then((response) => {
        // console.log(response)
        console.log(response.types.typename)
        // random = Math.floor((Math.random() * response.moves.move) + 1);
        // console.log(random)
    }).catch((error) => {
        console.log(error)
    })
}