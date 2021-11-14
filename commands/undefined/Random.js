let legendsJeroen = ["Ash", "Bangalore", "Bloodhoud", "Caustic", "Crypto", "Fuse", "Gibraltar", "Horizon", "Lifeline", "Loba", "Mirage", "Octane", "Pathfinder", "Rampart", "Revanant", "Seer", "Valkyrie", "Wattson"]
let legendsPepijn = ["Ash", "Bangalore", "Bloodhoud", "Fuse", "Gibraltar", "Lifeline", "Octane", "Pathfinder", "Rampart", "Seer", "Wattson"]
let legendsTjeerd = ["Ash", "Bangalore", "Bloodhoud", "Gibraltar", "Horizon", "Lifeline", "Mirage", "Octane", "Pathfinder", "Revanant", "Wattson"]
let mapKingsCanyon = ["Airbase", "ARES Capacitor", "Artillery Battery", "Artillery Underpass", "Broken Coast", "Broken Coast Overlook", "Broken Coast South", "Broken Relay", "Bunker Pass", "Cable Suspension", "Cage", "Cage Crossing", "Capacitor Junction", "Capacitor Overlook", "Capacitor Tunnel", "Caustic Treatment", "Caves", "Crashed Ship", "Crash Site", "Creature Containment", "Crossroads", "Crypto's Map Room", "Destroyed Artillery Tunnel", "Destroyed Cascades", "East Settlement", "Golden Sands", "High Desert", "Hillside Outpost", "Hydro Dam", "Hydro Tunnel", "Interstellar Relay", "Lagoon Crossing", "Marketplace", "Octane's Gauntlet", "Offshore Rig", "Offshore Rig Loading", "Reclaimed Forest", "Repulsor", "River Center", "Runoff", "Skull Salvage", "Singh Labs", "Singh Labs Interior", "Spotted Lake", "Suspended Skull", "Swamps", "The Pit", "The Pit", "Two Spines", "Two Spines Outpost", "Uncovered Bones", "Verdant Crossing", "Watchtower North", "Watchtower South"]
let mapWorldsEdge = ["Rampart's Big Maude", "Bloodhound's Trials", "Climatizer", "Countdown", "Fragment East", "Fragment West", "Fissure Crossing", "Harvester", "Hill Valley", "Landslide", "Launch Site", "Lava City", "Lava Fissure", "Lava Siphon", "Overlook", "Staging", "Skyhook", "Spring's End", "Storage Room", "Survey Camp", "Thermal Station", "The Bridge", "The Dome", "The Epicenter", "The Geyser", "The Mining Pass", "The Rain Tunnel", "The Tree"]
let mapOlympus = ["Docks", "Carrier", "Oasis", "Power grid", "Rift", "Gardens", "Turbine", "Energy depot", "Estates", "Alysium", "Hydroponics", "Hammond labs", "Solar array", "Bonsai plaza", "Orbital cannon", "Grow towers"]
let mapStormPoint = ["North pad", "The wall", "Highpoint", "Lightning rod", "Thunder watch", "Command center", "Checkpoint", "Cascade falls", "Storm catcher", "The mill", "Launch pad", "Antenna", "Bradmeter", "cenote cave", "Ship fall", "Gale sation", "fish farms"]

function RandomLegend(message) {
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
}

function RandomUserLegend(message, user_id) {
    tjeerdId = '381737213605445635';
    pepijnId = '547802472438169600';
    jeroenId = '406557761049067526';

    switch (user_id) {
        case tjeerdId:
            message.channel.send(legendsTjeerd[Math.floor(Math.random() * legendsTjeerd.length)]);
            break;
        case pepijnId:
            message.channel.send(legendsPepijn[Math.floor(Math.random() * legendsPepijn.length)]);
            break;
        case jeroenId:
            message.channel.send(legendsJeroen[Math.floor(Math.random() * legendsJeroen.length)]);
            break;
        default:
            message.channel.send('No user id, message dev');
            break;
    }
}

function RandomMapLocation(message, map) {
    console.log(String(map[1].toLowerCase()))
    switch (String(map[1].toLowerCase())) {
        case "worldsedge":
            message.channel.send(`Land at: ${mapWorldsEdge[Math.floor(Math.random() * mapWorldsEdge.length)]}`);
            break;
        case "kingscanyon":
            message.channel.send(`Lande at: ${mapKingsCanyon[Math.floor(Math.random() * mapKingsCanyon.length)]}`);
            break;
        case "olympus":
            message.channel.send(`Landee at: ${mapOlympus[Math.floor(Math.random() * mapOlympus.length)]}`);
            break;
        case "stormpoint":
            message.channel.send(`Landeee at: ${mapStormPoint[Math.floor(Math.random() * mapStormPoint.length)]}`);
            break;
        default:
            message.channel.send('Map doesn\'t exist.');
            break;
    }
}

module.exports = {
    name: 'random',
    description: "This will give you a random map or legend to play with.",
    usage: "random <all/legend/map> | random <map> <map>",
    category: "apex",
    run: async(client, message, args) => {

        command = args[0].toLowerCase()

        switch (command) {
            case 'all':
                RandomLegend(message);
                break;
            case 'legend':
                RandomUserLegend(message, (message.author.id));
                break;
            case 'map':
                RandomMapLocation(message, args);
                break;
        }

    }
}