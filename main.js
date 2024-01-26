import { Telegraf, Markup } from 'telegraf';
const webAppUrl = 'https://google.com/';

const token = '6740251900:AAERSd4oIjaVkQKiD9tBS-Lr2IvXRDXUlFs';

const bot = new Telegraf(token);

bot.command('start', (ctx) => {
  ctx.reply(
    'Добро пожаловать! Нажмите кнопку ниже, чтобы запустить приложение',
    Markup.keyboard([Markup.button.webApp('Отправить сообщение', webAppUrl)])
  );
});

bot.launch();
