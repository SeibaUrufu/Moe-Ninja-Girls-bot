const { SlashCommandBuilder } = require('@discordjs/builders');
const wait = require('util').promisify(setTimeout);


module.exports = {
	data: new SlashCommandBuilder()
		.setName('zap')
		.setDescription('To zap something')
    .addUserOption(option =>
      option.setName("target")
      .setDescription("The one you wish to zap")
      .setRequired(false))
    .addStringOption(option =>
      option.setName("text")
      .setDescription("Some text you want, I don't know I'm a description")
      .setRequired(false)),
	async execute(interaction) {
		const taggedUser = interaction.options.getUser('target'); //We get the mention
    const stringOption = interaction.options.getString('text');
        if (taggedUser!==null) { //If taggedUser is not undefined...
          if (taggedUser.id === interaction.member.id) { //If the author of the message tagged himself...
            interaction.reply("<@"+interaction.member.id+"> is a masochistic Hentai."); //We send this message
            return interaction.followUp('<a:EnjuZap:653780228933681192>')
          } else if(taggedUser.id === '758252653435944970' ||taggedUser.id === '720943363679059979') { //If he tag the bot or another bot then...
            await interaction.reply("*Focus*"); //Creation of the message
            await wait(1000); //Small timer
            await interaction.editReply("Mega zap on <@"+interaction.member.id+">"); //Message got edited
            return;
          } else {
            return interaction.reply("Zap at <@"+taggedUser+">")
          }
        } else if(null === taggedUser && null !== stringOption){ //If there is no mention, but a text
          return interaction.reply("Zap at "+stringOption) //We send the message with the argument
        } else { //No mention nor text
          return interaction.reply("Zap on everybody")
        }
	},
};