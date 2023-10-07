# Discord_JP_Address-Search-en
### Discord_JP_Address-Search-en Japanese Version! → [https://github.com/rainbow0210/Discord_JP_Address-Search](https://github.com/rainbow0210/Discord_JP_Address-Search)
<!--I made this program in my university programming contest. !-->

## Use Language
JavaScript

## Operationg environment
npm

Node.js v16

discord.js


## expanation

The bot work on the Discord. Zip code search Japanese addresses.This use, type a particular command.

## How to use?

1. Discord and Deepl account create. Bot work token. Because of that, discord bot create and get the code, and get deepl API key. Please refer to the following. (※Sorry, Japanese Website)

* Discord bot token : [Google translate this site](https://dot--blog-jp.translate.goog/news/discord-bot-token/?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)

* Deepl API : [Google translate this site](https://auto--worker-com.translate.goog/blog/?p=5030&_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp)


2. Second, Zip File unzip. "Discord_JP_Address-Search-en" folder open, and ".env" file open in text editor. (Visual Studio code etc...) "your_discord_bot_token" write my discord bot token. "src" foleder open, and "index.js" file open in text editor. Source code search "auth_key: 'your_auth_key'". "your_auth_key" write my deepl API key.


3. Node.js v16 need. Other version install. Please refer to the following.

* [https://nodejs.org/en/](https://nodejs.org/en/)

4. "Discord_JP_Address-Search-en" directory open Terminal(Mac, Linux) or Command Prompt. Typing command "npm install". Next, typing command "node src/index.js", start bot.


## Command list

* .help : Command view detail.

* .address <Japanese address number> : Message send Japanse address number,reply Japanese prefecture and place names.

* hi : "hi" send, "hi!"reply.

## Extension library and use data

* Node.js：[https://nodejs.org/ja/](https://nodejs.org/ja/)

* discord.js：[https://discord.js.org/](https://discord.js.org/)

* node-fetch v2：[https://www.npmjs.com/package/node-fetch](https://www.npmjs.com/package/node-fetch)

* Dotenv：[https://www.npmjs.com/package/dotenv](https://www.npmjs.com/package/dotenv)

* 郵便データ配信サービス Zipcloud：[http://zipcloud.ibsnet.co.jp/doc/api](https://www.npmjs.com/package/dotenv)

* Discord.js Japan User Group：[https://scrapbox.io/discordjs-japan/](https://scrapbox.io/discordjs-japan/)

* Deepl Free API：[https://www.npmjs.com/package/deepl](https://www.npmjs.com/package/deepl)
