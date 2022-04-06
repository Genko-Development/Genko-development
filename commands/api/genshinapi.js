const axios = require('axios').default;
const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'genshin',
    description: "This command show stuff about genshin impactS",
    usage: 'geshin',
    run: async(client, message, args) => {
        if (message.author.bot) return; 
        console.log()
        switch (args[0]) {
            case "artifacts":
                // var artifacts = require('./genshin/characters');
                message.channel.send("wow")
                await axios.get(`https://api.genshin.dev/artifacts`) 
                .then((response) => {
                    Data = response.data
                    message.channel.send(Data)      
                    // console.log(response.data)
                }).catch((error) => {
                    console.log(error)
                });
                break;
            case "1":
                console.log('wouw')
                break;
        }
        // await axios.get(`https://api.genshin.dev/characters`)
        //     .then((response) => {
        //         check(response.data, args, message, client);
        //     }).catch((error) => {
        //         console.log(error)
        //     })

}}
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
