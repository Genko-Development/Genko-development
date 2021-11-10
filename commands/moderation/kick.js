module.exports = {
    name: 'kick',
    description: "this command kicks a member!",
    run: async(client, message, args) => {
        const member = message.mentions.users.first();
        if (!message.member.hasPermission('KICK_MEMBERS')) {
            message.channel.send('You do not have the right permissions!')
        } else if (message.member.hasPermission('KICK_MEMBERS')) {
            if (member) {
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.kick();
                message.channel.send("User has been kicked");
            } else {
                message.channel.send('you couldnt kick that member');
            }
        }



    }
}