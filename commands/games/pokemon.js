const axios = require('axios').default;
const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')


module.exports = {
    name: 'pokemon',
    description: "funny pokemon game",
    usage: "pokemon <Pokemon name>",
    category: "games",
    run: async(client, message, args) => {
        // const logChannel = message.channel.id
        // console.log(logChannel)
        await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=1126`)
            .then((response) => {
                check(response.data, args,message,);

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

function check(data, args, message, client) {
    // this.message.channels.get(logChannel).send("test")
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
        message.channel.send(`Choose an attack`).then(function (message){
            message.react(':melon~1:')
        })
        .catch(error => {
                console.log(error)
            message.channel.send('Timeout');
        });
        
        // .then(async msg => {
        //     const filter = m => m.author.id == message.author.id
        //     message.channel.awaitMessages({ filter, max: 1 })
        //         .then(collected => {
        //             // console.log("kjenkjer")
        //             // var guess = collected.first().content
        //             // message.channel.send("wow")
        //             kanker = true
        //         }).catch(error => {
        //             console.log(error)
        //             message.channel.send('Timeout');
        //         });
        // })
        // if(kanker = true){
        //     message.channel.send("wow")
        // }
        // let filter = m => m.author.id === message.author.id
        // message.channel.send(`Choose an attack`).then((message,) => {
        //     message.channel.awaitMessages(filter, {
        //         max: 1,
        //         time: 30000,
        //         errors: ['time']
        //       })
        //       .then((message) => {
        //         // messageFirst = FilterMessage.first()
        //         playerNumber = Math.floor((Math.random() * 10) + 1);
        //         EnemyNumber = Math.floor((Math.random() * 10) + 1);
        //         if(playerNumber > EnemyNumber){
        //             message.channel.send(`You won`)
        //         } 
        //         if(playerNumber < EnemyNumber){
        //             message.channel.send(`You Lost`)
        //         }
        //         if(playerNumber == EnemyNumber){
        //             message.channel.send(`Draw`)
        //         }

        //       })
        //       .catch(error => {
        //           console.log(error)
        //         message.channel.send('Timeout');
        //     });
        // })        
    }
}