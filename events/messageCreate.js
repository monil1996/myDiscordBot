module.exports = {
	name: 'messageCreate',
	execute(interaction) {
		if (interaction.content === 'hello') {
            interaction.reply({
                content: 'hi there!!!',
            });
        }
	},
};