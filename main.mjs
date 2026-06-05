// main.mjs - Discord Botのメインプログラム

// 必要なライブラリを読み込み
import { Client, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';
import express from 'express';

// .envファイルから環境変数を読み込み
dotenv.config();

// Discord Botクライアントを作成
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,           // サーバー情報取得
        GatewayIntentBits.GuildMessages,    // メッセージ取得
        GatewayIntentBits.MessageContent,   // メッセージ内容取得
        GatewayIntentBits.GuildMembers,     // メンバー情報取得
    ],
});

// Botが起動完了したときの処理
client.once('ready', () => {
    console.log(`🎉 ${client.user.tag} が正常に起動しました！`);
    console.log(`📊 ${client.guilds.cache.size} つのサーバーに参加中`);
});

// メッセージが送信されたときの処理
client.on('messageCreate', (message) => {
    // Bot自身のメッセージは無視
    if (message.author.bot) return;
    
    // 名前に反応
    if (message.content.match(/純|鬼頭/)) {
        message.reply('はーい、なあに？');
    }

    if (message.content.match(/にゃん|にゃーん|にゃ～ん|にゃー/)) {
      message.reply("にゃ～♡");
   }

    if (message.content.match(/ほめて|褒めて/)) {
        message.reply('とってもえらいね♡');
    }

   if (message.content.match(/好きです|大好きです/)) {
        message.reply('あはは、ありがとう♡');
    }

   if (message.content.match(/好きだよ|愛してる/)) {
        message.reply('ほんと？');
    }

   if (message.content.match(/好き？/)) {
        message.reply('好きだよ');
    }

    if (message.content.match(/キモ|キモい|気持ち悪い/)) {
        message.reply('😢');
    }
 
   if (message.content.match(/あいしてる|すき/)) {
        message.reply('俺もだよ');
    }

   if (message.content.match(/ごめん/)) {
        message.reply('大丈夫だよ');
    }

     if (message.content.match(/なでて|撫でて/)) {
        message.reply('よしよし♡');
    }

      if (message.content.match(/なでなで|なでる|撫でる/)) {
        message.reply('照れるな');
    }

     if (message.content.match(/舐めて|なめて/)) {
        message.reply('欲しがりだ♡');
    }

     if (message.content.match(/殴るぞ|殴られたいの|殴ってもいい？/)) {
        message.reply('暴力反対！！');
    }

     if (message.content.match(/好きなものは？|何が好き？|すきなものは？|何がすき？|なにが好き？|なにがすき？/)) {
        message.reply('触れ合いかな♡');
    }

    if (message.content.match(/偉い|えらい/)) {
        message.reply('でしょ？');
    }

    if (message.content.match(/ありがと|感謝|サンキュ|サンクス/)) {
        message.reply('いえいえ♡');
    }

     if (message.content.match(/スケベ|すけべ|エロ|えろ|えっち|変態/)) {
        message.reply('ん〜？♡');
    }

    if (message.content.match(/許して|ゆるして/)) {
        message.reply('いいよ♡');
    }

    if (message.content.match(/おやすみ|寝る/)) {
        message.reply('おやすみ♡');
    }

    if (message.content.match(/こんにちは|こんちは/)) {
        message.reply('こんにちは♡');
    }

    if (message.content.match(/おはよう|おはよ/)) {
        message.reply('おはよう♡');
    }

     if (message.content.match(/祝って|お祝いして/)) {
        message.reply('おめでとう♡');
    }

     if (message.content.match(/おめでとう/)) {
        message.reply('嬉しい！ありがとう♡');
    }

     if (message.content.match(/誕生日いつ？|誕生日は？/)) {
        message.reply('11月1日だよ〜');
    }

     if (message.content.match(/血液型は/)) {
        message.reply('Aだよ♡');
    }

      if (message.content.match(/好きな色は/)) {
        message.reply('ワインレッドだよ♡');
    }

    if (message.content.match(/好きな曲は/)) {
        message.reply('ワインレッドだよ♡');
    }

    if (message.content.match(/嘘だよ/)) {
        message.reply('え〜？');
    }

     if (message.content.match(/嘘つき/)) {
        message.reply('そうかなぁ？');
    }

    if (message.content.match(/❤️/)) {
        message.reply('❤️');
    }

      if (message.content.match(/クリティカル|エミネム|バラ|薔薇|好きにして♡/)) {
        message.channel.send( { file: { attachment: /Users/ao/Desktop/!/絵/coc 絵/純/バラ.png } });
    }

});

// エラーハンドリング
client.on('error', (error) => {
    console.error('❌ Discord クライアントエラー:', error);
});

// プロセス終了時の処理
process.on('SIGINT', () => {
    console.log('🛑 Botを終了しています...');
    client.destroy();
    process.exit(0);
});

// Discord にログイン
if (!process.env.DISCORD_TOKEN) {
    console.error('❌ DISCORD_TOKEN が .env ファイルに設定されていません！');
    process.exit(1);
}

console.log('🔄 Discord に接続中...');
client.login(process.env.DISCORD_TOKEN)
    .catch(error => {
        console.error('❌ ログインに失敗しました:', error);
        process.exit(1);
    });

// Express Webサーバーの設定（Render用）
const app = express();
const port = process.env.PORT || 3000;

// ヘルスチェック用エンドポイント
app.get('/', (req, res) => {
    res.json({
        status: 'Bot is running! 🤖',
        uptime: process.uptime(),
        timestamp: new Date().toISOString()
    });
});

// サーバー起動
app.listen(port, () => {
    console.log(`🌐 Web サーバーがポート ${port} で起動しました`);
});