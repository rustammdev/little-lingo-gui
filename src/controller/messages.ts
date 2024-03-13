// bot
import { Context, InlineKeyboard } from "grammy";
import { bot } from "../core/bot";
import { updateData } from "../data/update-db";
import { startButton } from "../keyboards/inline";
import { inlineKeyboardLevel } from "../keyboards/inline";
import { startLessonMenu } from "../keyboards/inline";
import { games } from "../keyboards/inline";
import { reviewDictGame } from "./commands";

// keyboard commands
import { mygames } from "./commands";

// controller
import { start } from "./commands";



bot.command("start", start);

// english level inline
bot.on("callback_query:data", async (ctx) => {
  const id = ctx.from.id;
  const data = ctx.callbackQuery.data;

  if (data === "dars-start") {
    await ctx.deleteMessage();
    await ctx.answerCallbackQuery();
    ctx.reply("Xush kelibsiz foydalanuvchi.", {
      reply_markup: startLessonMenu,
    });
    return;
  }

  if (data === "back-to-level") {
    await ctx.deleteMessage();
    await ctx.answerCallbackQuery();
    await ctx.reply(
      "Ayni vaqtdagi inglis tili darajangizni tanlang. \nUshbu tanlov orqali qaysi bo'limdan foydalanihsinngiz aniqlanadi. \nXar bir bo'lim siz tanlagan darajaga qarab o'zgaradi.",
      {
        reply_markup: inlineKeyboardLevel,
      }
    );
    return;
  }

  if (["A1-pre", "A1", "A2", "B1", "B1", "C1", "C2"].includes(data)) {
    // Foydalanuvchi yangilagan malumotni databasega qo'shish
    updateData(data, id);
    await ctx.deleteMessage();
    await ctx.answerCallbackQuery();
    await ctx.reply("Darsni boshlamoqchimizis", { reply_markup: startButton });
    return;
  }

  // game list
  if (data === "to-games") {
    ctx.answerCallbackQuery();
    await ctx.reply("Barcha o'yinlar menusi", {
      reply_markup: games,
    });    
    return;
  }


  // review game
  if (data === "review-dict"){
    ctx.answerCallbackQuery()
    console.log('review');
    
  }
});

bot.command("mygames", mygames);


bot.hears("Review Dictionary", reviewDictGame)
