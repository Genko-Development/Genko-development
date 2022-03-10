const https = require('https');
const url = 'https://www.reddit.com/r/meme/hot/.json?limit=100'
module.exports = {
    name: 'boop',
    description: "Boops the taged member",
    usage: "boop <member>",
    category: "info",
    run: async(client, message, args) => {
        if (message.author.bot) return;
        wow = message.mentions.members.first()
        if (wow != undefined) {
            message.channel.send(`Boop ${wow}`)
        }


        // if(a == "852651213911490631"){
        //     message.delete();   
        //     const embed = new Discord.MessageEmbed();
        //     got('https://www.reddit.com/r/memes/random/.json')
        //         .then(response => {
        //             const [list] = JSON.parse(response.body);
        //             const [post] = list.data.children;

        //             const permalink = post.data.permalink;
        //             const memeUrl = `https://reddit.com${permalink}`;
        //             const memeImage = post.data.url;
        //             const memeTitle = post.data.title;
        //             const memeUpvotes = post.data.ups;
        //             const memeNumComments = post.data.num_comments;

        //             embed.setTitle(`${memeTitle}`);
        //             embed.setURL(`${memeUrl}`);
        //             embed.setColor('RANDOM');
        //             embed.setImage(memeImage);
        //             embed.setFooter(`👍 ${memeUpvotes} 💬 ${memeNumComments}`);

        //             message.channel.send(embed);
        //         })
        //         .catch(console.error);
        // } else{
        //     message.delete();   
        //     message.channel.send(`Get booped ${args[0]}`)
        // }

    }
}