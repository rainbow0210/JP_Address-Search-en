//格言APIを叩ける
const axios = require('axios');
//DeeplのAPI
const translate = require("deepl");
require('dotenv').config(); //.envファイルを使えるようにする
const fetch = require('node-fetch'); //fetch を使えるようにする
const {token} = process.env; // DiscordのBotのトークンを .env ファイルから受け取る
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
	intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages],
});

//起動確認用
client.once('ready', () => {
    console.log(`${client.user.tag} Ready`);
    client.user.setPresence({ activities: [{ name:'.en help' }] }); // 「...をプレイ中」のステータスメッセージの表示
});

//応答

//コマンドに応答する処理はここにまとめる
const prefix = '.en ' //コマンドの頭文字に使う記号の宣言

client.on('messageCreate', async message => {
    if (!message.content.startsWith(prefix)) {
        return;
    }

    if (message.author.bot) { //Botのメッセージには反応しないようにする
        return;
    }
   
    const [command, ...args] = message.content.slice(prefix.length).split(/\s+/)
    if (command === 'address') { // .en address コマンドが来た時の処理
        const [zip] = args;
        const url = "https://zipcloud.ibsnet.co.jp/api/search?zipcode="+zip;
        let address; // 住所を保存するための変数
        const response = await fetch(url); // URL から情報を受け取る
        const json = await response.json();

        console.log(json);
        
        //判定処理
        if (json.results == null) {
            address = "No address."; // エラー用メッセージ
        }
        else {
            const result = json.results[0];
            address = result.address1 + result.address2 + result.address3; // 全ての情報を連結
        }
        console.log(address);
        message.channel.send("__Japanese:" + address + "__");

        //deepl版
        translate({
            free_api: true,
            text: address,
            source_lang: 'JA',
            target_lang: 'EN-US',
            auth_key: 'your_auth_key',
            // All optional parameters available in the official documentation can be defined here as well.
          })
          .then(result => {
              message.channel.send("__Translate:" + result.data.translations[0].text + "__ **by DeepL Translate**");
              console.log(result.data.translations[0].text);
          })
          .catch(error => {
              console.error(error)
          });

        
        //addressを表示するプログラム
        //console.log(address);
    }
    else if(command === 'help'){ // .en help コマンドが来た時の処理
        message.channel.send({
            embeds: [{
                title: '⇩This bot command list!⇩',
                fields: [{ name: '.en help', value: 'Command view detail.' },
                         { name: '.en address <Japanese address number> ', value: 'message send Japanese address number, reply Japanese prefecture and place names.' },
                         { name: 'hi', value: '**「hi」** send, **「hi」** reply.' }],
                color: 0xffffff,
            }]
          })
    }
    else{ // 存在しないコマンドが入力された時の処理
        message.channel.send("No command! **.en help** command view!");
    }
});

//文章に応答する処理はこちらにまとめる
client.on('messageCreate', message => {  
    if (message.author.bot) { //Botのメッセージには反応しないようにする
        return;
    }

    if (message.content === 'hi') {
        message.reply('hi!'); //メンションをして返信する
    }
});

//Discordへの接続
client.login(token);
