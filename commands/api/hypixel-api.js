const key = '71ee3a14-8d0e-4dd9-8661-e30c8d235ff2'
const axios = require('axios').default;
const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'hypixel',
    description: "",
    usage: "hypixel | help <cmd>",
    category: "api",
    run: async(client, message, args) => {
        const playername = args[0]
        let id;

        await axios.get(`https://api.mojang.com/users/profiles/minecraft/${playername}`)
            .then((response) => {
                data = response.data
                id = data.id;
                // getStats(id)
                console.log(id)

            });

        await axios.get(`https://api.hypixel.net/player?key=${key}&${id}`)
            .then((response) => {
                data = response.data
                console.log(data)
            });




        // function getId(playername) {
        //     return fetch(`https://api.mojang.com/users/profiles/minecraft/${playername}`)
        //         .then(data => data.json())
        //         .then(player => player.id);
        // }

        // getId(args[2]).then(id => {
        //     console.log(`ID is ${id}`)
        // })
        // const id = await getId(args[2])
        // console.log(`ID is ${id}`)

        // function getStats(key, id) {
        //     return fetch(`https://api.hypixel.net/player?key=${key}&${id}`)
        //         .then(data => data.json())
        // }

    }
}