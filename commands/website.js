module.exports = {
    name: 'website',
    description: "sends website link!",
    execute(message, args) {
        message.channel.send('Coming soon!').then(msg => {
                msg.delete({ timeout: 5000 })
            })
            .catch('message was not send');


    }
}