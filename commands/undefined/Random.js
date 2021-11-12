module.exports = {
    name: 'random',
    description: "This will give you something random",
    run: async(client, message, args) => {
        let legendsJeroen = ["Ash", "Bangalore", "Bloodhoud", "Caustic", "Crypto", "Fuse", "Gibraltar", "Horizon", "Lifeline", "Loba", "Mirage", "Octane", "Pathfinder", "Rampart", "Revanant", "Seer", "Valkyrie", "Wattson"]
        let legendsPepijn = ["Ash", "Bangalore", "Bloodhoud", "Fuse", "Gibraltar", "Lifeline", "Octane", "Pathfinder", "Rampart", "Seer", "Wattson"]
        let legendsTjeerd = ["Ash", "Bangalore", "Bloodhoud", "Gibraltar", "Horizon", "Lifeline", "Mirage", "Octane", "Pathfinder", "Revanant", "Wattson"]
            // let More = args[0]


        if (args[0] == "all") {
            let randomLegendTjeerd = legendsTjeerd[Math.floor(Math.random() * legendsTjeerd.length)];
            let randomLegendPepijn = legendsPepijn[Math.floor(Math.random() * legendsPepijn.length)];
            let randomLegendJeroen = legendsJeroen[Math.floor(Math.random() * legendsJeroen.length)];
            if (randomLegendJeroen != randomLegendPepijn) {
                if (randomLegendJeroen != randomLegendTjeerd)
                    if (randomLegendTjeerd != randomLegendPepijn)
                        message.channel.send(randomLegendTjeerd)
                message.channel.send(randomLegendPepijn)
                message.channel.send(randomLegendJeroen)
            }
            // else if (randomLegendJeroen != randomLegendPepijn)  {
            //     let randomLegendJeroen = legendsJeroen[Math.floor(Math.random() * legendsJeroen.length)];

            // }


        } else if (message.author.id == "381737213605445635") {
            let randomLegend = legendsTjeerd[Math.floor(Math.random() * legendsTjeerd.length)];
            message.channel.send(randomLegend)
        } else if (message.author.id == "547802472438169600") {
            let randomLegend = legendsPepijn[Math.floor(Math.random() * legendsPepijn.length)];
            message.channel.send(randomLegend)
        } else if (message.author.id == "406557761049067526") {
            let randomLegend = legendsJeroen[Math.floor(Math.random() * legendsJeroen.length)];
            message.channel.send(randomLegend)
        }



    }
}