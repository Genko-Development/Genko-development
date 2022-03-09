//87799a0a-b30a-489e-b33d-aa67ffafe764
module.exports = {
    name: 'hypixel',
    description: "Show list of all commands / show command details.",
    usage: "help | help <cmd>",
    category: "info",
    run: async(client, message, args) => {
        function getId(playername) {
            return fetch(`https://api.mojang.com/users/profiles/minecraft/${playername}`)
                .then(data => data.json())
                .then(player => player.id);
        }
        getId(args[2]).then(id => {
            console.log(`ID is ${id}`)
        })
        const id = await getId(args[2])
        console.log(`ID is ${id}`)
    }
}