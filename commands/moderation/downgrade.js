const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'downgrade',
    description: "downgrades your rank",
    run: async(client, message, args) => {

        const author = message.member.id
        const target = message.mentions.users.first();

        if (!message.member.roles.cache.find(r => r.name === "Dev Team")) {
            message.channel.send('Nehh!')
            console.log(`${author} tried to do the upgrade command`)

        } else if (message.member.roles.cache.find(r => r.name === "Dev Team")) {

            if (target) {

                let memberTarget = message.guild.members.cache.get(target.id);

                let downgrade1 = message.guild.roles.cache.find(role => role.name === 'viewer');
                let downgrade = message.guild.roles.cache.find(role => role.name === 'Mod');
                let basis = message.guild.roles.cache.find(role => role.name === 'Admin');

                let members = message.mentions.members.array()
                let modDowngrade = message.guild.roles.cache.find(r => r.name === 'Admin');

                for (let member of members) {
                    let hasRole = member.roles.cache.has(modDowngrade.id);
                    console.log(`${member.id}: ${hasRole}`);
                    if (hasRole) {
                        memberTarget.roles.add(downgrade.id);
                        memberTarget.roles.remove(basis.id)
                        message.channel.send(
                            new MessageEmbed()
                            .setAuthor(member.user.tag, member.user.displayAvatarURL({ dynamic: true }))
                            .setDescription(`${member} unfortunately you downgraded to Modarator`)
                            .setColor('RANDOM')
                        )
                    }
                }

                let viewerDowngrade = message.guild.roles.cache.find(r => r.name === 'Mod');
                for (let member of members) {
                    let hasRole = member.roles.cache.has(viewerDowngrade.id);
                    console.log(`${member.id}: ${hasRole}`);
                    if (hasRole) {
                        memberTarget.roles.add(downgrade1.id);
                        memberTarget.roles.remove(downgrade.id)
                        message.channel.send(
                            new MessageEmbed()
                            .setAuthor(member.user.tag, member.user.displayAvatarURL({ dynamic: true }))
                            .setDescription(`${member} unfortunately you downgraded to Viewer`)
                            .setColor('RANDOM')
                        )
                    }
                }






            }
        }

    }
}