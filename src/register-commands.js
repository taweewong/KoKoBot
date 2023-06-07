/*
    run `node .\src\register-commands.js` to register command to server 
    that specific by GUILD_ID and CLIENT_ID (bot id)
*/

require('dotenv').config();

const { REST, Routes, ApplicationCommand, ApplicationCommandOptionType } = require ('discord.js')
const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

export const commands = [
    {
        name: 'hey',
        description: 'Replies with hey!'
    },
    {
        name: 'ping',
        description: 'Replies with pong!'
    },
    {
        name: 'add',
        description: 'Add two numbers.',
        options: [
            {
                name: 'first-number',
                description: 'The first number',
                type: ApplicationCommandOptionType.Number,
                choices: [
                    {
                        name: 'one',
                        value: 1
                    },
                    {
                        name: 'two',
                        value: 2
                    },
                    {
                        name: 'three',
                        value: 3
                    }
                ],
                required: true
            },
            {
                name: 'second-number',
                description: 'The second number',
                type: ApplicationCommandOptionType.Number,
                choices: [
                    {
                        name: 'one',
                        value: 1
                    },
                    {
                        name: 'two',
                        value: 2
                    },
                    {
                        name: 'three',
                        value: 3
                    }
                ],
                required: true
            }
        ]
    }
]

(async () => {
    try {
        console.log('Register slash commands ........')
        await rest.put(
            Routes.applicationGuildCommands(
                process.env.CLIENT_ID,
                process.env.GUILD_ID
            ),
            { 
                body: commands 
            }
        )
        console.log('Register slash commands successfully')
    } catch (error) {
        console.log(`Error: ${error}`)
    }
})();
