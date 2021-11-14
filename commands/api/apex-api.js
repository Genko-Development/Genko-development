const axios = require('axios').default;
const { MessageEmbed } = require('discord.js');

const apiKey = 'aHV8tzyspYDsLV4kBlF3'

module.exports = {
    name: 'apex',
    description: "This command get stats from Apex Legends!",
    usage: 'apex <platform> <username>',
    run: async(client, message, args) => {
        let platform = args[0].toUpperCase();
        let user = args[1];

        if (args == "") {
            message.channel.send("Enter a platform and a username!")
        }
        if (platform.toUpperCase() == platforms[0] || platforms[1]) {} else {
            message.channel.send("Enter a real platform!")
        }

        await axios.get(`https://api.mozambiquehe.re/bridge?version=5&platform=${platform}&player=${user}&auth=${apiKey}`)
            .then((response) => {
                let globalData = response.data.global;
                let data = response.data;

                loadEmbed(globalData, data);
            });


        function loadEmbed(globalData, data) {
            const userEmbed = new MessageEmbed()
                .setColor('#0099ff')
                .setTitle(globalData.rank.rankName)
                .setAuthor(globalData.name, globalData.avatar)
                .setDescription(`Score: ${globalData.rank.rankScore}`)
                .setThumbnail(globalData.rank.rankImg)
                .addFields({ name: `Currently: ${data.realtime.currentState}`, value: `Is ingame: ${data.realtime.isInGame}` }, { name: `Current Legend: ${data.realtime.selectedLegend}`, value: ` Total kills: ${data.total.specialEvent_kills.value}` }, { name: `Level: ${globalData.level}`, value: `dammage: ${data.total.specialEvent_damage.value}` })
                .setTimestamp()
                .setFooter(``, '');

            message.reply(userEmbed);
        }

    }
}