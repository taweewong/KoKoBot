const commands = require('../const/commands')

onCommandEnterEvent = (interaction) => {
    if (interaction.commandName === commands.PING_COMMAND) {
        interaction.reply('pong!')
    }
    if (interaction.commandName === 'add') {
        const num1 = interaction.options.get('first-number').value;
        const num2 = interaction.options.get('second-number').value;

        interaction.reply(`${num1} + ${num2} = ${num1 + num2}`)
    }
}

module.exports = onCommandEnterEvent;
