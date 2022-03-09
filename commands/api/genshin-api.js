const axios = require('axios').default;
const { MessageEmbed } = require('discord.js')


module.exports = {
    name: 'genshin',
    description: "This command show stuff about genshin impactS",
    usage: 'geshin',
    run: async(client, message, args) => {
        artifacts = ["adventurer","archaic-petra","berserker","blizzard-strayer","bloodstained-chivalry","brave-heart","crimson-witch-of-flames","defender-s-will","emblem-of-severed-fate","gambler","glacier-and-snowfield","gladiator-s-finale","heart-of-depth","instructor","lavawalker","lucky-dog","maiden-beloved","martial-artist","noblesse-oblige","pale-flame","prayers-for-destiny","prayers-for-illumination","prayers-for-wisdom","prayers-to-springtime","prayers-to-the-firmament","resolution-of-sojourner","retracing-bolide","scholar","shimenawa-s-reminiscence","tenacity-of-the-millelith","the-exile","thundering-fury","thundersoother","tiny-miracle","traveling-doctor","viridescent-venerer","wanderer-s-troupe"]
        if (message.author.bot) return; 
        rarity = '' 

        console.log(args[0])
        if(args[0] == 'characters'){
            message.channel.send(characters)
        } else if(args[0] == 'artifacts'){
            // message.channel.send(artifacts)
            await axios.get(`https://api.genshin.dev/artifacts`) 
                .then((response) => {
                    message.channel.send(response.data)                    
                });
        }else if(args[0] != "characters"){
            await axios.get(`https://api.genshin.dev/characters`) 
                .then((response) => {
                    response.data.includes(args[0])
                    loadCharacterInfo(args[0], message)
                });
        }
        if(args[0] == 'nations'){
            await axios.get(`https://api.genshin.dev/nations`) 
                .then((response) => {
                    message.channel.send(response.data)                    
                });
        }
        
    }
}   

function loadEmbed(data, message, color, character) {
    const characterEmbed = new MessageEmbed()
        .setColor(color)
        .setTitle("Genshin Impact")
        .setDescription(`Information about ${character}`)
        .setThumbnail()
        .addFields({name: `Name: `, value: `${data.name}`, inline: true,},{name:`rarity: `, value: `${rarity}`, inline: true,},{name:`Vision: `, value: `${data.vision}` , inline: true},
        {name: `weapon: `, value: `${data.weapon}`, inline: true,},{name:`Nation: `, value: `${data.nation}`, inline: true,},)
        .setTimestamp()

    message.channel.send(characterEmbed);
}

async function loadCharacterInfo(character, message) {
    await axios.get(`https://api.genshin.dev/characters/${character}`) 
        .then((response) => {
            data = response.data
            if(data.rarity == 4){
                color =  '#9B59B6'
                rarity = '⭐⭐⭐⭐'
            }
            else if(data.rarity == 5){
                color =  '#F1C40F'
                rarity = '⭐⭐⭐⭐⭐'
            }
            loadEmbed(data, message, color, character)
        });
}