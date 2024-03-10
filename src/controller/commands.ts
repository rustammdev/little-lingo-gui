import { Context } from "grammy";
import { inlineKeyboardLevel } from "../keyboards/inline";
import { startKeyboard } from "../keyboards/keyboard";

import { main } from "../data/users_controller";


const test = async (ctx: Context) => {
  const id = ctx.from?.id;
  const name = ctx.from?.last_name
    ? `${ctx.from?.first_name} ${ctx.from?.last_name}`
    : ctx.from?.first_name + "";
  const link = ctx.from?.username
    ? "@" + ctx.from.username
    : "Mavjud emas" + "";

  const checkUser = await main(Number(id))

  if (Array.isArray(checkUser) && checkUser.length === 0) {
    console.log('The array is empty.')
  }else {
    console.log('The array is not empty or not an array.')
  }


  
  
  await ctx.reply("Ushbu tugmani bosih orqali shaxsiy kabinet yaratasiz", {
    reply_markup: startKeyboard,
  });
};

export { test };
