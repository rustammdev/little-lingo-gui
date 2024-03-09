import { Context } from "grammy";
import { addUserInfo } from "../data/add_db";
import { checkUser } from "../data/check_db";

import { InlineKeyboard } from "grammy";
const inlineKeyboardLevel = new InlineKeyboard()
  .text("Foundation (A1-pre)", "A1-pre")
  .text("Elementary (A1)", "A1")
  .row()
  .text("Pre Intermediate (A2)", "A2")
  .text("Intermediate (B1)", "B1")
  .row()
  .text("Upper Intermediate (B2)", "B2")
  .text("Advanced (C1)", "C1")
  .row()
  .text("Proficiency (C2)", "C2");

// Start
export const startMessage = async (ctx: Context) => {
  const id = ctx.from?.id;
  const name = ctx.from?.last_name
    ? `${ctx.from?.first_name} ${ctx.from?.last_name}`
    : ctx.from?.first_name + "";

  // Foydalanuvchi borlikka tekshiruv
  const check = await checkUser(Number(id));

  // Foydalanuvchi mavjud bo'lmasa db ga saqlash
  if (!check === true) {
    const link = ctx.from?.username
      ? "@" + ctx.from.username
      : "Mavjud emas" + "";

    addUserInfo(id, name, name, link);
  }

  await ctx.reply(`Xush kelibsiz ${name}`);
  await ctx.reply("Ayni vaqtdagi darajangizni belgilang", {
    reply_markup: inlineKeyboardLevel,
  });
};
