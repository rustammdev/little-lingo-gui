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

// English rank
bot.callbackQuery("back-to-level", async (ctx) => {
  await ctx.deleteMessage();
  await ctx.answerCallbackQuery();
  await ctx.reply(
    "Ayni vaqtdagi inglis tili darajangizni tanlang. \nUshbu tanlov orqali qaysi bo'limdan foydalanihsinngiz aniqlanadi. \nXar bir bo'lim siz tanlagan darajaga qarab o'zgaradi.",
    {
      reply_markup: inlineKeyboardLevel,
    }
  );
});

// Dars start inline
bot.callbackQuery("dars-start", async (ctx) => {
  await ctx.deleteMessage();
  await ctx.answerCallbackQuery();
  ctx.reply("Xush kelibsiz foydalanuvchi.", {
    reply_markup: startLessonMenu,
  });
});

bot.callbackQuery(["A1-pre", "A1", "A2", "B1", "B1", "C1", "C2"], async (ctx) => {
  const data = ctx.callbackQuery.data
  const id = ctx.from.id;
  updateData(data, id); // user english ranki yangilandi
  await ctx.answerCallbackQuery();
  await ctx.deleteMessage();
  await ctx.reply("Darsni boshlamoqchimizis", { reply_markup: startButton });
 
});

// Inline o'yinlar ro'yxati
bot.callbackQuery("to-games", async (ctx) => {
  ctx.answerCallbackQuery();
  await ctx.reply("Barcha o'yinlar menusi", {
    reply_markup: games,
  });
});

// All game list
bot.command("mygames", mygames);

// Review Dictionary game
bot.hears("Review Dictionary", reviewDictGame);
bot.callbackQuery("review-dict", async (ctx) => {
  ctx.answerCallbackQuery();
  console.log("review");
});
