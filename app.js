// import module yg dibutuhkan
const { Telegraf } = require("telegraf")
const dotnenv = require("dotenv")

// import konfigurasi token bot
dotnenv.config()
const token = process.env.TOKEN

// inisialisasi bot
const bot = new Telegraf(token)

// register 1 command
bot.command("start", (context) => context.reply("Hello"))


// start bot mode polling
bot.launch()