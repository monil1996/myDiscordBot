require('dotenv').config();

module.exports = {
	name: 'guildMemberAdd',
	execute(interaction) {
		console.log("Member joined" + interaction.displayName)
        interaction.client.channels.cache.get(process.env.CHANNEL_ID).send("Welcome")
	},
};