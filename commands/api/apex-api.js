const axios = require('axios').default;
const { MessageEmbed } = require('discord.js');

const apiKey = 'aHV8tzyspYDsLV4kBlF3'

module.exports = {
    name: 'apex',
    description: "this command get stats from Apex Legends!",
    run: async(client, message, args) => {
        let platform = args[0].toUpperCase();
        let user = args[1];
        // let arenas = args[2];


        //https://api.mozambiquehe.re/bridge?version=5&platform=PS4&player=${user}&auth=${apiKey}
        //https://api.mozambiquehe.re/bridge?version=5&platform=Pc&player=${user}&auth=${apiKey}
        await axios.get(`https://api.mozambiquehe.re/bridge?version=5&platform=${platform}&player=${user}&auth=${apiKey}`)
            .then((response) => {
                let globalData = response.data.global;
                let data = response.data;

                loadEmbed(globalData, data);
                console.log(`${data.legends.selected.data}`)
            });


        function loadEmbed(globalData, data) {


            const userEmbed = new MessageEmbed()
                .setColor('#0099ff')
                .setTitle(globalData.rank.rankName)
                .setURL('https://discord.js.org/')
                .setAuthor(globalData.name, globalData.avatar)
                .setDescription(`Score: ${globalData.rank.rankScore}`)
                .setThumbnail(globalData.rank.rankImg)
                .addFields({ name: `Currently: ${data.realtime.currentState}`, value: `Is ingame: ${data.realtime.isInGame}` }, { name: `Current Legend: ${data.realtime.selectedLegend}`, value: ` Total kills: ${data.total.specialEvent_kills.value}` }, { name: `Level: ${globalData.level}`, value: `dammage: ${data.total.specialEvent_damage.value}` })


            .setTimestamp()
                .setFooter(``, '');

            message.reply(userEmbed);
        }

        // if (arenas = args[2]) {

        // }



    }
}