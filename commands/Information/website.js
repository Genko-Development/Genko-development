module.exports = {
    name: 'website',
    usage: 'website',
    description: "sends website link!",
    run: async(client, message, args) => {
        message.channel.send('Coming soon!').then(msg => {
            msg.delete({ timeout: 5000 })
        }).catch('message was not send');
    }
}