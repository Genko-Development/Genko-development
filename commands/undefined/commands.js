const commandEmbed = {
    color: 0x0099ff,
    title: 'Commands',
    url: 'https://discord.js.org',
    author: {
        name: 'Genko Development',
        icon_url: '',
        url: '',
    },
    fields: [{
            name: 'These are the command that you can use',
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
    name: 'commands',
    description: "sends all commands!",
    run: async(client, message, args) => {
        message.channel.send({ embed: commandEmbed })



    }
}