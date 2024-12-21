# Бот геометр

### Бот геометр - телеграм-бот должен отправить чертеж для ее решения.

## Требования

Перед запуском убедитесь, что установлен: https://nodejs.org/en
Изменить данные в config:

> [!NOTE]
> bot.token на свой токен чат бота.

> [!NOTE]
> gpt.token на свой токен.

>[!NOTE]
> group.id на индификатор своей группы (беседы)
  
  > [!IMPORTANT]
  > остальное не трогать!!!

## Установка

 ## https://miktex.org/ (или любой другой)


Библиотеки:<br>
```
npm install telegraf
```
```
npm install openai
```

## Запуск

+ На локалке:

> [!NOTE]
> cd [путь к папке где находится бот]

> [!NOTE]
> node bot.js (либо воспользоваться run.bat)

+ На хостинге:

> [!NOTE]
>cd [путь к папке где находится бот]

> [!NOTE]
>node bot.js

> [!NOTE]
>либо же через: pm2 start bot.js --name my-bot
>чтобы остановить: pm2 stop my-bot 
