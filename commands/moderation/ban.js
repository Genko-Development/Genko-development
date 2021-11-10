module.exports = {
    name: 'ban',
    description: "This command bans a member!",
    run: async(client, message, args) => {
        const member = message.mentions.users.first();
        if (member) {
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.ban();
            message.channel.send("User has been banned");
        } else {
            message.channel.send('you couldnt ban that member');
        }


    }
}