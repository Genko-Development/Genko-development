module.exports = {
    name: 'clear',
    description: "Clears messages",
    async execute(message, args) {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) {
            message.channel.send('You do not have the right permissions!')
        } else if (message.member.hasPermission('MANAGE_MESSAGES')) {
            if (!args[0]) return message.reply("Enter the amout of message you want to clear!");
            if (isNaN(args[0])) return message.reply("please enter a real number!");

            if (args[0] > 100) return message.reply("you cannnot delet more than 100 messages!");
            if (args[0] < 1) return message.reply("You must delete atleast one message!");

            await message.channel.messages.fetch({ limit: args[0] }).then(messages => {
                message.channel.bulkDelete(messages);
            });
        }


    }
}