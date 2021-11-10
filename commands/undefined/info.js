const InfoEmbed = {
    color: 0x0099ff,
    title: 'Info',
    url: 'https://discord.js.org',
    author: {
        name: 'Genko Development',
        icon_url: '',
        url: '',
    },
    fields: [{
            name: 'This is the information about our dicord server',
            value: 'Some value here',
        },
        {
            name: '\u200b',
            value: '\u200b',
            inline: false,
        },
        {
            name: 'Type (prefix)Ping',
            value: 'Sends pong',
            inline: true,
        },
        {
            name: 'Type (prefix)rules',
            value: 'Sends the rules',
            inline: true,
        },
        {
            name: 'Type (prefix)website',
            value: 'Sends the link to our website',
            inline: true,
        }, //second row
        {
            name: '\u200b',
            value: '\u200b',
            inline: false,
        },
        {
            name: '-',
            value: '-',
            inline: true,
        },
        {
            name: '-',
            value: '-',
            inline: true,
        },
        {
            name: '-',
            value: '-',
            inline: true,
        },
    ],
    timestamp: new Date(),
    footer: {
        text: 'We hope this helped you, If not message a staff member',
    },
};

module.exports = {
    name: 'info',
    description: "sends info message!",
    run: async(client, message, args) => {
        message.channel.send({ embed: InfoEmbed })



    }
}