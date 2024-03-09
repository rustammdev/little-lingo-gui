// bot
import { bot } from "../core/bot";
import { InlineKeyboard } from "grammy";

// database
import { addUserInfo } from "../data/add_user";
import { checkUser } from "../data/check_user";

bot.command("start", async (ctx) => {
  const id = ctx.from?.id;
  const name = ctx.from?.last_name
    ? `${ctx.from?.first_name} ${ctx.from?.last_name}`
    : ctx.from?.first_name + "";

  const check = await checkUser(Number(id)); // Foydalanuvchi borlikka tekshiruv

  if (!check === true) {
    const link = ctx.from?.username
      ? "@" + ctx.from.username
      : "Mavjud emas" + "";

    addUserInfo(id, name, name, link);

    ctx.reply(`Xush kelibsiz ${name}`);
  }

  ctx.reply("Foydalanuvchi mavjud");

  // baxaga malumot qo'shuvchi funksia
});
