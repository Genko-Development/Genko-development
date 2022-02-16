const axios = require('axios').default;
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'poll',
    description: "This command makes a poll!",
    usage: 'poll <question> "awnser" "awnser" ect.',
    run: async(client, message) => {
        if (!message.member.roles.cache.find(r => r.name === "Dev Team")) {
            message.channel.send('Nehh!')
            console.log(`${author} tried to do the upgrade command`)

        } else if (message.member.roles.cache.find(r => r.name === "Dev Team")) {

            const options = [
                '🇦','🇧','🇨','🇩','🇪','🇫','🇬','🇭','🇮','🇯','🇰','🇱','🇲','🇳','🇴','🇵','🇶','🇷','🇸','🇹','🇺','🇻','🇼','🇽','🇾','🇿',
            ];

            const args = message.content.trim().split(/ +/g);

            // Defining the question...
            let question = [];

            for (let i = 1; i < args.length; i++) {
            if (args[i].startsWith('"')) break;
            else question.push(args[i]);
            }

            question = question.join(' ');

            // Defining the choices...
            const choices = [];

            const regex = /(["'])((?:\\\1|\1\1|(?!\1).)*)\1/g;
            let match;
            while (match = regex.exec(args.join(' '))) choices.push(match[2]);

            // Creating and sending embed...
            let content = [];
            for (let i = 0; i < choices.length; i++) content.push(`${options[i]} ${choices[i]}`);
            content = content.join('\n');
            const embed = new MessageEmbed()
            .setColor('#8CD7FF')
            .setTitle(`**${question}**`)
            .setDescription(content);

            message.channel.send(`:bar_chart: ${message.author} started a poll.`, embed)
            .then(async m => {
                for (let i = 0; i < choices.length; i++) await m.react(options[i]);
            });
        }
    }
}