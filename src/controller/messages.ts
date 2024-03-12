// bot
import { InlineKeyboard } from "grammy";
import { bot } from "../core/bot";
import { updateData } from "../data/update-db";
import { startButton } from "../keyboards/inline";
import { inlineKeyboardLevel } from "../keyboards/inline";
import { startLessonMenu } from "../keyboards/inline";

// controller
import { start } from "./commands";

bot.command("start", start);

// english level inline
bot.on("callback_query:data", async (ctx) => {
  const id = ctx.from.id;
  const randkData = ctx.callbackQuery.data;

  if (randkData === "dars-start") {
    await ctx.deleteMessage();
    await ctx.answerCallbackQuery();
    ctx.reply("Xush kelibsiz foydalanuvchi.", {
      reply_markup: startLessonMenu,
    });
    return;
  }

  if (randkData === "back-to-level") {
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

  await ctx.answerCallbackQuery();

  if (["A1-pre", "A1", "A2", "B1", "B1", "C1", "C2"].includes(randkData)) {
    await ctx.deleteMessage();
    await ctx.reply("Darsni boshlamoqchimizis", { reply_markup: startButton });
  }

  // Foydalanuvchi yangilagan malumotni databasega qo'shish
    updateData(randkData, id);
});
