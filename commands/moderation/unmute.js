module.exports = {
    name: 'unmute',
    description: "This will mute a member",
    usage: 'unmute <user>',
    category: 'moderation',
    run: async(client, message, args) => {
        const target = message.mentions.users.first();
        if (!message.member.hasPermission('KICK_MEMBERS')) {
            message.channel.send('You do not have the right permissions!')
        } else if (message.member.hasPermission('KICK_MEMBERS')) {
            if (target) {
                let mainRole = message.guild.roles.cache.find(role => role.name === 'viewer');
                let muteRole = message.guild.roles.cache.find(role => role.name === 'mute');

                let memberTarget = message.guild.members.cache.get(target.id);

                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
                message.channel.send(`<@${memberTarget.user.id}> had been unmuted`);

            } else {
                message.channel.send('Cant find that member!');
            }
        }

    }
}