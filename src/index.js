require('dotenv').config();
const onCommandEnterEvent = require('./handlers/command-handler');
const onMessageCreateEvent = require('./handlers/message-create-handler');

const { Client, IntentsBitField } = require('discord.js');
const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
})

//when our bot is ready
client.on('ready', (client) => { 
    console.log(`${client.user.tag} is online 😀`);
}) 

client.on('messageCreate', (message) => {
    if (message.author.bot) {
        return;
    }
    onMessageCreateEvent(message);
})

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand) return;
    if (interaction.isCommand) {
        onCommandEnterEvent(interaction);
    }
})

client.login(process.env.TOKEN);
