import { Context } from "grammy";
import { startKeyboard } from "../keyboards/keyboard";
import { getUsers } from "../data/get-users";

const test = async (ctx: Context) => {
  const id = ctx.from?.id;
  const name = ctx.from?.last_name
    ? `${ctx.from?.first_name} ${ctx.from?.last_name}`
    : ctx.from?.first_name + "";
  const link = ctx.from?.username
    ? "@" + ctx.from.username
    : "Mavjud emas" + "";

  const result = await getUsers(Number(id));
  // console.log(result);
  if (Array.isArray(result) && result.length != 0) {
    console.log("User mavjud");
  } else {
    console.log("User mavjud emas");
  }

  await ctx.reply("Ushbu tugmani bosih orqali shaxsiy kabinet yaratasiz", {
    reply_markup: startKeyboard,
  });
};

export { test };
