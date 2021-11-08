module.exports = {
    name: 'join',
    description: "Bot joins your call",
    execute(message, args) {
        if (!message.member.voice.channel) return message.channel.send("Please connect to a voice channel!"); //If you are not in the voice channel, then return a message
        message.member.voice.channel.join();

        // const resource = createAudioResource('./audio/audiofile.mp3');
        // const dispatcher = connection.play('./audio/audiofile.mp3');
        // player.play(resource);
        // dispatcher.on("end", end => {
        //     voiceChannel.leave();
        // });


    }
}