import { Context } from "grammy";

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

const test = async (ctx: Context) => {
  await ctx.reply("Start bosildi", {
    reply_markup: inlineKeyboardLevel,
  });
};

export { test };
