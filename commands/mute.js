module.exports = {
    name: 'mute',
    description: "This will mute a member",
    execute(message, args) {
        const target = message.mentions.users.first();
        if (!message.member.hasPermission('MANAGE_MESSAGES')) {
            message.channel.send('You do not have the right permissions!')
        } else if (message.member.hasPermission('MANAGE_MESSAGES')) {
            if (target) {

                let mainRole = message.guild.roles.cache.find(role => role.name === 'viewer');

                let muteRole = message.guild.roles.cache.find(role => role.name === 'mute');

                let memberTarget = message.guild.members.cache.get(target.id);

                let secondRole = message.guild.roles.cache.find(role)


                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.remove(secondRole.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> had been muted`);

            } else {
                message.channel.send('Cant find that member!');
            }
        }

    }
}