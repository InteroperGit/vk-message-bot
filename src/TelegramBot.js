const TelegramBot = require('node-telegram-bot-api');
const telegramBot = new TelegramBot(process.env.TL_TOKEN, { polling: true });
const responseChats = [process.env.TL_GROUP_CHAT_ID];

telegramBot.onText(/\/start (.+)/, (msg, match) => {
    try {
        const { chat: { id: chatId } } = msg;
        const secret = match[1];

        if (secret !== process.env.TL_SECRET) {
            telegramBot.sendMessage.sendMessage(chatId, 'Секретная фраза неверная');
        }
        else {
            if (!responseChats.some((chat) => chat === secret)) {
                responseChats.push(chatId);
            }
            telegramBot.sendMessage.sendMessage(chatId, 'Чат успешно добавлен в список уведомлений');
        }
    }
    catch (err) {
        console.log(err);
    }
});

console.log('TelegramBot was successfully started');

module.exports = {
    sendMessage: (msg) => {
        responseChats.map((chat) => telegramBot.sendMessage(chat, msg));
    }
};
