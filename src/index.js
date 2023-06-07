require('dotenv').config();

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

// client.on('messageCreate', (message) => {
//     if (message.author.bot) {
//         return;
//     }
//     if (message.content === 'hi') {
//         message.reply(`Hi! ${message.author.username}`);
//     }
//     console.log(message);
// })

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand) return;

    if (interaction.commandName === 'hey') {
        interaction.reply('hey!')
    }
    if (interaction.commandName === 'ping') {
        interaction.reply('pong!')
    }
    if (interaction.commandName === 'add') {
        const num1 = interaction.options.get('first-number').value;
        const num2 = interaction.options.get('second-number').value;

        interaction.reply(`${num1} + ${num2} = ${num1 + num2}`)
    }
})

client.login(process.env.TOKEN)
