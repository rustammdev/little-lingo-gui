import { Context } from "grammy";
import { getUsers } from "../data/get-user";
import { addUserDb } from "../data/add-db";
import { inlineKeyboardLevel } from "../keyboards/inline";
import { startLessonMenu } from "../keyboards/inline";

const start = async (ctx: Context) => {
  const id = ctx.from?.id;
  const result = await getUsers(ctx);

  if (Array.isArray(result) && result.length === 0) {
    // standart malumotlarni qoshish
    await addUserDb(ctx);

    await ctx.reply(
      "Ayni vaqtdagi inglis tili darajangizni tanlang. \nUshbu tanlov orqali qaysi bo'limdan foydalanihsinngiz aniqlanadi. \nXar bir bo'lim siz tanlagan darajaga qarab o'zgaradi.",
      {
        reply_markup: inlineKeyboardLevel,
      }
    );
  } else {
    ctx.reply("Xush kelibsiz foydalanuvchi.", {
      reply_markup: startLessonMenu,
    });
  }
};


const setting = async (ctx: Context) => {
  
}

export { start };
