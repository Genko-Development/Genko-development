module.exports = {
    name: 'commands',
    description: "sends all the commands",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
            .setColor('#129381')
            .setTitle('Commands')
            // .setDiscription('These are all of the commands')
            .addFields({ name: 'Ping', value: 'Sends Pong' }, { name: 'rules', value: 'Sends the Rules' }, { name: 'Info', value: 'sends Information about the server' }, )
            .setFooter('make sure to check all the channels');

        message.channel.send(newEmbed);
    }
}