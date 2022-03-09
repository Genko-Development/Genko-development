const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

//Global queue for your bot. Every server will have a key and value pair in this map. { guild.id, queue_constructor{} }

// let song = {};

module.exports = {
    name: 'skip',
    aliases: ['skip', 'stop'], //We are using aliases to run the skip and stop command follow this tutorial if lost: https://www.youtube.com/watch?v=QBUJ3cdofqc
    cooldown: 0,
    description: 'Advanced music bot',
    usage: 'skip',
    category: 'music',
    run: async(client, message, args) => {
        const server_queue = queue.get(message.guild.id);
        skip_song(message, server_queue)

    }
}