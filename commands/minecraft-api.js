const axios = require('axios').default;

// minecraft api 
const apiKey = '65344394-7608-4a51-8685-876258d7cb44'
const uuidLink = 'https://api.mojang.com/users/profiles/minecraft/'

module.exports = {
    name: 'api',
    description: "this command get stats from hypixel!",
    execute(message, args) {

        axios.get(`${uuidLink + args[0]}`)
            .then((response) => {
                axios.get(`https://api.hypixel.net/player?key=${apiKey}&uuid=${response.data.id}`)
                    .then((response) => {
                        console.log(response.data);
                    });
            });





    }
}