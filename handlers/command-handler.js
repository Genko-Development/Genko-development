const { readdirSync } = require("fs");


// Create a new Ascii table
module.exports = (client) => {
    // Read every commands subfolder
    readdirSync("./commands/").forEach(dir => {
        // Filter so we only have .js command files
        const commands = readdirSync(`./commands/${dir}/`).filter(file => file.endsWith(".js"));
    
        // Loop over the commands, and add all of them to a collection
        // If there's no name found, prevent it from returning an error,
        // By using a cross in the table we made.
        for (let file of commands) {
            let pull = require(`../commands/${dir}/${file}`);
    
            if (pull.name) {
                client.commands.set(pull.name, pull);
            } else {
                continue;
            }
    
        }
    });
    
}