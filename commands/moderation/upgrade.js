const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'upgrade',
    description: "upgrades your rank",
    category: 'moderation',
    run: async(client, message, args) => {

        const author = message.member.id
        const target = message.mentions.users.first();

        if (!message.member.roles.cache.find(r => r.name === "Dev Team")) {
            message.channel.send('Nehh!')
            console.log(`${author} tried to do the upgrade command`)

        } else if (message.member.roles.cache.find(r => r.name === "Dev Team")) {

            if (target) {

                let memberTarget = message.guild.members.cache.get(target.id);

                let basis = message.guild.roles.cache.find(role => role.name === 'viewer');
                let upgrade = message.guild.roles.cache.find(role => role.name === 'Mod');
                let upgrade1 = message.guild.roles.cache.find(role => role.name === 'Admin');

                let members = message.mentions.members.array()
                let modUpgrade = message.guild.roles.cache.find(r => r.name === 'Mod');

                for (let member of members) {
                    let hasRole = member.roles.cache.has(modUpgrade.id);
                    console.log(`${member.id}: ${hasRole}`);
                    if (hasRole) {
                        memberTarget.roles.add(upgrade1.id);
                        memberTarget.roles.remove(upgrade.id)
                        message.channel.send(
                            new MessageEmbed()
                            .setAuthor(member.user.tag, member.user.displayAvatarURL({ dynamic: true }))
                            .setDescription(`${member} congratulations with your rank upgrade, You became an Admin`)
                            .setColor('RANDOM')
                        )
                    }
                }

                let viewerUpgrade = message.guild.roles.cache.find(r => r.name === 'viewer');
                for (let member of members) {
                    let hasRole = member.roles.cache.has(viewerUpgrade.id);
                    console.log(`${member.id}: ${hasRole}`);
                    if (hasRole) {
                        memberTarget.roles.add(upgrade.id);
                        memberTarget.roles.remove(basis.id)
                        message.channel.send(
                            new MessageEmbed()
                            .setAuthor(member.user.tag, member.user.displayAvatarURL({ dynamic: true }))
                            .setDescription(`${member} congratulations with your rank upgrade, You became a Modarator`)
                            .setColor('RANDOM')
                        )
                    }
                }






            }
        }

    }
}

// console.log(target.roles)
// let memberRoles = member.roles.cache.filter((roles) => roles.id !== message.guild.id).map((role) => role.toString())
// console.log(memberRoles)


// message.channel.send(
//     new MessageEmbed()
//     .setAuthor(member.user.tag, member.user.displayAvatarURL({ dynamic: true }))
//     .setDescription(`${member}'s roles => ${memberRoles}`)
//     .setColor('RANDOM')
// )