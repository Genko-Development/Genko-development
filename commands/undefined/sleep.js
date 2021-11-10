const { GuildMember } = require("discord.js");

module.exports = {
    name: 'sleep',
    description: "This kick a person out a call",
    run: async(client, message, args) => {
        const target = message.mentions.users.first();

        if (!message.member.hasPermission('MOVE_MEMBERS')) {
            message.channel.send('Nope!')
        } else if (message.member.hasPermission('MOVE_MEMBERS')) {
            if (target) {
                let memberTarget = message.guild.members.cache.get(target.id);
                // memberTarget.setMute(true)
                // const channel = message.member.voice.channel;
                // member.voice.setChannel(channel);
                message.channel.send(`<@${memberTarget.user.id}> needs to take a nap`);

            } else {
                message.channel.send('Cant find that member!');
            }
        }

    }
}