require('dotenv').config();
const vkBot = require('./VkBot');
const telegramBot = require('./TelegramBot');

vkBot.addTelegramBot(telegramBot);