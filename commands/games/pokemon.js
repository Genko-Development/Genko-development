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
                check(response.data, args,message);

            }).catch((error) => {
                console.log(error)
            });
            

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
// Math.floor((Math.random() * 10) + 1);

function check(data, args, message) {
    for (let i = 0; i < data.results.length; i++) {
        let pokemonName = data.results[i].name;
        str = args[0].replace(/\s+/g, '-').toLowerCase();
        if (pokemonName == str) {
            console.log("wejow")
            message.channel.send("Ready!")
            found = true
            break;
        } else{
            found = false
        }
    }
    if(found == false){
        message.channel.send("That is not a real pokemon")
    }
    if(found == true)
    {   
        let filter = m => m.author.id === message.author.id
        console.log(epic)
        message.channel.send(`Choose an attack`).then(() => {
            message.channel.awaitMessages(filter, {
                max: 1,
                time: 30000,
                errors: ['time']
              })
              .then((message) => {
                // messageFirst = FilterMessage.first()
                playerNumber = Math.floor((Math.random() * 10) + 1);
                EnemyNumber = Math.floor((Math.random() * 10) + 1);
                if(playerNumber > EnemyNumber){
                    message.channel.send(`You won`)
                } 
                if(playerNumber < EnemyNumber){
                    message.channel.send(`You Lost`)
                }
                if(playerNumber == EnemyNumber){
                    message.channel.send(`Draw`)
                }

              })
              .catch(collected => {
                  console.log(error)
                message.channel.send('Timeout');
            });
        })        
    }
}