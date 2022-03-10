const axios = require('axios').default;
const { MessageEmbed } = require('discord.js');
const apexkey = require('../../token.json');

module.exports = {
    name: 'apex',
    description: "This command get stats from Apex Legends!",
    usage: 'apex <platform> <username>',
    category: 'apex',
    run: async(client, message, args) => {
        const apiKey = apexkey.apex
        let platform = args[0].toUpperCase();
        let user = args[1];
        let platforms = ["PC", "PS4"]
        if (args == "") {
            message.channel.send("Enter a platform and a username!")
        }
        if (platform == platforms[0] || platforms[1]) {} else {
            message.channel.send("Enter a real platform!")
        }

        await axios.get(`https://api.mozambiquehe.re/bridge?version=5&platform=${platform}&player=${user}&auth=${apiKey}`)
            .then((response) => {
                let globalData = response.data.global;
                let data = response.data;

                loadEmbed(globalData, data);
            }).catch((error) => {
                console.log(error)
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