const axios = require('axios').default;
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'pokemon',
    description: "funny pokemon game",
    usage: "pokemon <Pokemon name>",
    category: "games",
    run: async(client, message, args) => {

        await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=1126`)
            .then((response) => {
                check(response.data, args);
            }).catch((error) => {
                console.log(error)
            });
        console.log("kanker")

        // for (item in data) {
        //     if (args[0] == data.results.name) {
        //         console.log('jes')
        //         break;

        //     } else {
        //         console.log('nope')
        //     }
        // }
        // data.results.forEach((element, args) => {
        //     if (0 == 0) {
        //         console.log('jes')
        //         return;

        //     } else {
        //         console.log('nope')
        //     }

        // })

    }

}

function check(data, args) {
    console.log(data.results.length)
    for (i in data.results) {
        if (i.name == args[0]) {
            console.log("wejow")
            break;
        }
    }
}