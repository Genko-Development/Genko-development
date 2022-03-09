const Discord = require(`discord.js`);
module.exports = {
    name: 'google',
    description: "google search",
    usage: "help ",
    category: "undefined",
    run: async(client, message, args) => {
        random = Math.floor(Math.random() * 200) + 1;
        pixel1 = args[1]
        pixel2 = args[2]
        argsbool = false

        if(args[0] == "wejow" && args[1] == undefined){
            // await axios.get(`https://picsum.photos/200/300`) 
            //     .then((response) => {
            //         message.channel.send(response.data)                    
            //     });
            message.channel.send(`https://picsum.photos/id/${random}/200/300`)
        } 

        if(args[1] != undefined && args[2] != undefined){
            argsbool = true
        }
        if(argsbool == true){
            message.channel.send(`https://picsum.photos/${pixel1}/${pixel2}`)
            // if(!args[1] == undefined && args[2] == undefined){
            //     message.channel.send(`https://picsum.photos/${pixel1}/${pixel2}`)  
            // } else {
            //     message.channel.send("yikes")
            // }
        }
        
        console.log(args[1],args[2])


        // let args = message.content.split(/[ ]+/);
        // let suffix0 = args.slice(1).join(' ');
        // if (!suffix) {
        //     message.channel.send({
        //         embed: {
        //             color: 0xff2727,
        //             description: `:warning: **${message.author.username}**, You didn't give me anything to search. {m!google \`input\`}`,
        //             footer: {
        //                 text: 'API Lantancy is ' + `${Date.now() - message.createdTimestamp}` + ' ms',
        //             }
        //         }
        //     });
        // }
        // google.resultsPerPage = 25;
        // google(suffix, function (err, res) {
        //     if (err) message.channel.send({
        //         embed: {
        //             color: 0xff2727,
        //             description: `:warning: **${message.author.username}**, ${err}`,
        //             footer: {
        //                 text: 'API Lantancy is ' + `${Date.now() - message.createdTimestamp}` + ' ms',
        //             }
        //         }
        //     });
        //     for (var i = 0; i < res.links.length; ++i) {
        //         var link = res.links[i];
        //         if (!link.href) {
        //             res.next;
        //         } else {
        //             let embed = new Discord.RichEmbed()
        //                 .setColor(`#ffffff`)
        //                 .setAuthor(`Result for "${suffix}"`, `https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2000px-Google_%22G%22_Logo.svg.png`)
        //                 .setDescription(`**Link**: [${link.title}](${link.href})\n**Description**:\n${link.description}`)
        //                 .setTimestamp()
        //                 .setFooter('API Lantancy is ' + `${Date.now() - message.createdTimestamp}` + ' ms', message.author.displayAvatarURL);
        //             return message.channel.send({
        //                 embed: embed
        //             });
        //         } return message.react("👌");
        //     }
        // });
}};