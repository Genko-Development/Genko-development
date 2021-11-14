module.exports = {
    name: 'ping',
    description: "this is a ping command!",
    usage: 'ping',
    category: 'unknown',
    run: async(client, message, args) => {
        message.channel.send('Pong!')
    }
}