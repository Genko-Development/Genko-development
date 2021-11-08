const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');


// to use this command you need ffmpeg installed.

// to install go to this link https://www.gyan.dev/ffmpeg/builds/ download the ffmpeg-release-essentials.zip and paste them into a findable folder
// make a new path variable to this folder and done.

module.exports = {
    name: 'play',
    description: "Bot joins your call",
    async execute(message, args) {
        const voiceChannel = message.member.voice.channel;

        if (!voiceChannel) return message.channel.send('You need to be in a channel to execute this command!');
        const permissions = voiceChannel.permissionsFor(message.client.user);
        if (!permissions.has('CONNECT')) return message.channel.send('You dont have the correct permissins');
        if (!permissions.has('SPEAK')) return message.channel.send('You dont have the correct permissins');
        if (!args.length) return message.channel.send('You need to send the second argument!');

        const validURL = (str) => {
            var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
            if (!regex.test(str)) {
                return false;
            } else {
                return true;
            }
        }

        if (validURL(args[0])) {

            const connection = await voiceChannel.join();
            const stream = ytdl(args[0], { filter: 'audioonly' });

            connection.play(stream, { seek: 0, volume: 1 })
                .on('finish', () => {
                    voiceChannel.leave();
                    message.channel.send('leaving channel');
                });

            await message.channel.send(`:thumbsup: Now Playing ***Your Link!***`)

            return
        }


        const connection = await voiceChannel.join();

        const videoFinder = async(query) => {
            const videoResult = await ytSearch(query);

            return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;

        }

        const video = await videoFinder(args.join(' '));

        if (video) {
            const stream = ytdl(video.url, { filter: 'audioonly' });
            connection.play(stream, { seek: 0, volume: 1 })
                .on('finish', () => {
                    voiceChannel.leave();
                });

            await message.channel.send(`:thumbsup: Now Playing ***${video.title}***`)
        } else {
            message.channel.send('No video results found');
        }


    }
}