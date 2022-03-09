const axios = require('axios').default;
const { MessageEmbed } = require('discord.js')


module.exports = {
    name: 'genshin',
    description: "This command show stuff about genshin impactS",
    usage: 'geshin',
    run: async(client, message, args) => {
        characters = ["albedo", "aloy", "amber", "ayaka", "barbara", "beidou", "bennett", "chongyun", "diluc", "diona", "eula", "fischl", "ganyu", "hu-tao", "jean", "kaeya", "kazuha", "keqing", "klee", "kokomi", "lisa", "mona", "ningguang", "noelle", "qiqi", "raiden", "razor", "rosaria", "sara", "sayu", "sucrose", "tartaglia", "traveler-anemo", "traveler-electro", "traveler-geo", "venti", "xiangling", "xiao", "xingqiu", "xinyan", "yanfei", "yoimiya", "zhongli"]
        artifacts = ["adventurer", "archaic-petra", "berserker", "blizzard-strayer", "bloodstained-chivalry", "brave-heart", "crimson-witch-of-flames", "defender-s-will", "emblem-of-severed-fate", "gambler", "glacier-and-snowfield", "gladiator-s-finale", "heart-of-depth", "instructor", "lavawalker", "lucky-dog", "maiden-beloved", "martial-artist", "noblesse-oblige", "pale-flame", "prayers-for-destiny", "prayers-for-illumination", "prayers-for-wisdom", "prayers-to-springtime", "prayers-to-the-firmament", "resolution-of-sojourner", "retracing-bolide", "scholar", "shimenawa-s-reminiscence", "tenacity-of-the-millelith", "the-exile", "thundering-fury", "thundersoother", "tiny-miracle", "traveling-doctor", "viridescent-venerer", "wanderer-s-troupe"]
        if (message.author.bot) return;
        // artifact = true

        console.log(args[0])
        if (args[0] == `characters`) {
            message.channel.send(characters)

        } else if (args[0] == "artifacts") {
            message.channel.send(artifacts)

        }
        if (args[0] != "characters" && args[0] != "artifacts") {
            for (character in characters) {
                if (character = args[0]) {
                    await axios.get(`https://api.genshin.dev/characters/${character}`)
                        .then((response) => {
                            data = response.data
                            color = (data.rarity == 4) ? '#9B59B6' : '#F1C40F'
                            loadEmbed(data, message, color, character)
                        });
                    break
                }
            }
        } else {
            return
        }

    }
}

function loadEmbed(data, message, color, character) {
    const characterEmbed = new MessageEmbed()
        .setColor(color)
        .setTitle("Genshin Impact")
        .setDescription(`Information about ${character}`)
        .setThumbnail()
        .addFields({ name: `Name: `, value: `${data.name}`, inline: true, }, { name: `rarity: `, value: `${data.rarity}`, inline: true, }, { name: `Vision: `, value: `${data.vision}`, inline: true }, { name: `weapon: `, value: `${data.weapon}`, inline: true, }, { name: `Nation: `, value: `${data.nation}`, inline: true, }, )
        .setTimestamp()
        // .setFooter(`birthday: `,`${data.birthday}`);

    message.channel.send(characterEmbed);
}