module.exports = {
    name: 'epic',
    description: "Gives targeted member the role",
    run: async(client, message, args) => {
        const target = message.mentions.users.first();

        if (!message.member.roles.cache.find(r => r.name === "Magic Man")) {
            message.channel.send('Nehh!')
            console.log('someone tried to do the perms command')
        } else if (message.member.roles.cache.find(r => r.name === "Magic Man")) {
            if (target) {

                let permsRole = message.guild.roles.cache.find(role => role.name === 'Perms');


                let memberTarget = message.guild.members.cache.get(target.id);



                memberTarget.roles.add(permsRole.id);

            }
        }


    }
}