const axios = require('axios').default;
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'kaas',
    description: "",
    usage: "hypixel | help <cmd>",
    category: "api",
    run: async(client, message, args) => {

        const options = {
            method: 'GET',
            url: 'https://yh-finance.p.rapidapi.com/stock/v3/get-chart',
            params: {
              interval: '1mo',
              symbol: 'S&P 500',
              range: '5y',
              region: 'US',
              includePrePost: 'false',
              useYfid: 'true',
              includeAdjustedClose: 'true',
              events: 'capitalGain,div,split'
            },
            headers: {
              'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com',
              'X-RapidAPI-Key': 'e0c3cef6e1msh088692c7f19430dp1d2decjsn826716ad180b'
            }
          };
          
          axios.request(options).then(function (response) {
              console.log(response.data);
          }).catch(function (error) {
              console.error(error);
          });

    }
}

function loadEmbed(data) {
    const characterEmbed = new MessageEmbed()
        .setColor(color)
        .setTitle("Genshin Impact")
        .setDescription(`Information about ${character}`)
        .setThumbnail()
        .addFields({},)
        .setTimestamp()

    message.channel.send(characterEmbed);
}