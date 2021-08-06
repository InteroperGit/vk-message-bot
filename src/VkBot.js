const VkBot = require('node-vk-bot-api');

const vkBot = new VkBot({
    token: process.env.VK_TOKEN,
    group_id: process.env.VK_GROUP_ID
});

vkBot.on((ctx) => {
    try {
        if (this.telegramBot) {
            this.telegramBot.sendMessage('Новое сообщение в группе ВК');
        }

        const REPLY_MESSAGE = `Добрый день.
			Благодарим за обращение. Наш менеджер свяжется с Вами в самое ближайшее время.`;
        ctx.reply(REPLY_MESSAGE);
    }
    catch (err) {
        console.log(err);
    }
});

vkBot.startPolling((err) => {
    if (err) {
        console.error(err);
    }
});

vkBot.addTelegramBot = (telegramBot) => {
    if (!telegramBot) {
        throw new Error('Telegram bot must be initialized');
    }
    this.telegramBot = telegramBot;
}

console.log('VKBot was successfully started');

module.exports = vkBot;