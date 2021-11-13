module.exports = {
    name: 'random',
    description: "This will give you something random",
    run: async(client, message, args) => {
        let legendsJeroen = ["Ash", "Bangalore", "Bloodhoud", "Caustic", "Crypto", "Fuse", "Gibraltar", "Horizon", "Lifeline", "Loba", "Mirage", "Octane", "Pathfinder", "Rampart", "Revanant", "Seer", "Valkyrie", "Wattson"]
        let legendsPepijn = ["Ash", "Bangalore", "Bloodhoud", "Fuse", "Gibraltar", "Lifeline", "Octane", "Pathfinder", "Rampart", "Seer", "Wattson"]
        let legendsTjeerd = ["Ash", "Bangalore", "Bloodhoud", "Gibraltar", "Horizon", "Lifeline", "Mirage", "Octane", "Pathfinder", "Revanant", "Wattson"]
        let mapKingsCanyon = ["Airbase", "ARES Capacitor", "Artillery Battery", "Artillery Underpass", "Broken Coast", "Broken Coast Overlook", "Broken Coast South", "Broken Relay", "Bunker Pass", "Cable Suspension", "Cage", "Cage Crossing", "Capacitor Junction", "Capacitor Overlook", "Capacitor Tunnel", "Caustic Treatment", "Caves", "Crashed Ship", "Crash Site", "Creature Containment", "Crossroads", "Crypto's Map Room", "Destroyed Artillery Tunnel", "Destroyed Cascades", "East Settlement", "Golden Sands", "High Desert", "Hillside Outpost", "Hydro Dam", "Hydro Tunnel", "Interstellar Relay", "Lagoon Crossing", "Marketplace", "Octane's Gauntlet", "Offshore Rig", "Offshore Rig Loading", "Reclaimed Forest", "Repulsor", "River Center", "Runoff", "Skull Salvage", "Singh Labs", "Singh Labs Interior", "Spotted Lake", "Suspended Skull", "Swamps", "The Pit", "The Pit", "Two Spines", "Two Spines Outpost", "Uncovered Bones", "Verdant Crossing", "Watchtower North", "Watchtower South"]
        let mapWorldsEdge = ["Rampart's Big Maude", "Bloodhound's Trials", "Climatizer", "Countdown", "Fragment East", "Fragment West", "Fissure Crossing", "Harvester", "Hill Valley", "Landslide", "Launch Site", "Lava City", "Lava Fissure", "Lava Siphon", "Overlook", "Staging", "Skyhook", "Spring's End", "Storage Room", "Survey Camp", "Thermal Station", "The Bridge", "The Dome", "The Epicenter", "The Geyser", "The Mining Pass", "The Rain Tunnel", "The Tree"]
        let mapOlympus = ["Docks", "Carrier", "Oasis", "Power grid", "Rift", "Gardens", "Turbine", "Energy depot", "Estates", "Alysium", "Hydroponics", "Hammond labs", "Solar array", "Bonsai plaza", "Orbital cannon", "Grow towers"]
        let mapStormPoint = ["North pad", "The wall", "Highpoint", "Lightning rod", "Thunder watch", "Command center", "Checkpoint", "Cascade falls", "Storm catcher", "The mill", "Launch pad", "Antenna", "Bradmeter", "cenote cave", "Ship fall", "Gale sation", "fish farms"]
            // let More = args[0]
        command = args[0].toLowerCase()


        if (command == "all") {
            let randomLegendTjeerd = legendsTjeerd[Math.floor(Math.random() * legendsTjeerd.length)];
            let randomLegendPepijn = legendsPepijn[Math.floor(Math.random() * legendsPepijn.length)];
            let randomLegendJeroen = legendsJeroen[Math.floor(Math.random() * legendsJeroen.length)];
            if (randomLegendJeroen != randomLegendPepijn) {
                if (randomLegendJeroen != randomLegendTjeerd)
                    if (randomLegendTjeerd != randomLegendPepijn)
                        message.channel.send(`Tjeerd: ${randomLegendTjeerd}`)
                message.channel.send(`Pepijn: ${randomLegendPepijn}`)
                message.channel.send(`Jeroen: ${randomLegendJeroen}`)
            }
            // else if (randomLegendJeroen != randomLegendPepijn)  {
            //     let randomLegendJeroen = legendsJeroen[Math.floor(Math.random() * legendsJeroen.length)];

            // }


        } else if (message.author.id == "381737213605445635" && args[0] == "legend") {
            let randomLegend = legendsTjeerd[Math.floor(Math.random() * legendsTjeerd.length)];
            message.channel.send(randomLegend)
        } else if (message.author.id == "547802472438169600") {
            let randomLegend = legendsPepijn[Math.floor(Math.random() * legendsPepijn.length)];
            message.channel.send(randomLegend)
        } else if (message.author.id == "406557761049067526") {
            let randomLegend = legendsJeroen[Math.floor(Math.random() * legendsJeroen.length)];
            message.channel.send(randomLegend)
        }
        if (command == "worldsedge") {
            let randommap = mapWorldsEdge[Math.floor(Math.random() * mapWorldsEdge.length)];
            message.channel.send(`Land at: ${randommap}`)
        }
        if (command == "kingscanyon") {
            let randommap = mapKingsCanyon[Math.floor(Math.random() * mapKingsCanyon.length)];
            message.channel.send(`Land at: ${randommap}`)
        }
        if (command == "olympus") {
            let randommap = mapOlympus[Math.floor(Math.random() * mapOlympus.length)];
            message.channel.send(`Land at: ${randommap}`)
        }
        if (command == "stormpoint") {
            let randommap = mapStormPoint[Math.floor(Math.random() * mapStormPoint.length)];
            message.channel.send(`Land at: ${randommap}`)
        }



    }
}