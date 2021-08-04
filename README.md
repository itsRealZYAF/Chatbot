# HOW TO INSTALL THE CHATBOT

![SCREEN](https://user-images.githubusercontent.com/72516691/128196080-50a544ec-70bd-4792-93ef-6d67267c92ff.PNG)

1. Download NodeJS [here](https://nodejs.org/).
2. Run `DSC.bat` and `EXPRESS.bat` to install the necessary modules.
3. Edit the `config.js` file.
```js
module.exports = {
    name: "", // The name of your bot.
    token: "", // The bot token to put here.
    channel: "", // ID of the channel where you want the chatbot to speak.

    authorization: "" // Get your token from https://api.snowflakedev.org/ and paste it here.
}
```
4. Run `RUN.bat` to connect your chatbot.
