module.exports = {
    name: 'ban',
    description: "This command bans a member!",
    usage: 'ban <user>',
    category: 'moderation',
    run: async(client, message, args) => {
        if (!message.member.hasPermission('BAN_MEMBERS')) {
            message.channel.send('Nehh!')
            console.log(`${author} tried to do the upgrade command`)

        }else{
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
}