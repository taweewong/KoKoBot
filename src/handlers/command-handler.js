const commands = require('../const/commands')
const { EmbedBuilder } = require('discord.js');

function onCommandEnterEvent(interaction) {
    if (interaction.commandName === commands.PING_COMMAND) {
        interaction.reply('pong!')
        const embed = new EmbedBuilder(
            {
                "title": "Hello ~~people~~ world :wave:",
                "description": "You can use [links](https://discord.com) or emojis :smile: 😎\n```\nAnd also code blocks\n```",
                "color": 4321431,
                "timestamp": "2023-06-07T18:56:26.060Z",
                "url": "https://discord.com",
                "author": {
                    "name": "Author name",
                    "url": "https://discord.com",
                    "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png"
                },
                "thumbnail": {
                    "url": "https://cdn.discordapp.com/embed/avatars/0.png"
                },
                "image": {
                    "url": "https://cataas.com/cat"
                },
                "footer": {
                    "text": "Footer text",
                    "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png"
                },
                "fields": [
                    {
                        "name": "Field 1, *lorem* **ipsum**, ~~dolor~~",
                        "value": "Field value"
                    },
                    {
                        "name": "Field 2",
                        "value": "You can use custom emojis <:Kekwlaugh:722088222766923847>. <:GangstaBlob:742256196295065661>",
                        "inline": false
                    },
                    {
                        "name": "Inline field",
                        "value": "Fields can be inline",
                        "inline": true
                    },
                    {
                        "name": "Inline field",
                        "value": "*Lorem ipsum*",
                        "inline": true
                    },
                    {
                        "name": "Inline field",
                        "value": "value",
                        "inline": true
                    },
                    {
                        "name": "Another field",
                        "value": "> Nope, didn't forget about this",
                        "inline": false
                    }
                ]
            }
        )
        interaction.channel.send({ embeds: [embed] })
    }
    if (interaction.commandName === 'add') {
        const num1 = interaction.options.get('first-number').value;
        const num2 = interaction.options.get('second-number').value;
        interaction.reply(`${num1} + ${num2} = ${num1 + num2}`)
    }
}

module.exports = onCommandEnterEvent;
