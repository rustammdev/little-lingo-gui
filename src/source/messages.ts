import { bot } from "../core/bot";
import { addUserInfo } from "../data/add_user";

bot.command("start", async (ctx) => {
  const id = ctx.from?.id;
  const name = ctx.from?.last_name
    ? `${ctx.from?.first_name} ${ctx.from?.last_name}`
    : ctx.from?.first_name + "";

  const link = ctx.from?.username
    ? "@" + ctx.from.username
    : "Mavjud emas" + "";

  ctx.reply("hello");
  addUserInfo(id, name, name, link);
});
