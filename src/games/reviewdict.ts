import { Context } from "grammy";
import { getUserRank } from "../data/get-user";
import { RowDataPacket } from "mysql2";
import { Keyboard } from "grammy";
import { reviewInlineKeyboard } from "../keyboards/inline";
import { bot } from "../core/bot";

const moduls = require("../content/moduls.json");

export const ReviewDictionaryGame = async (ctx: Context) => {
  const id = ctx.from?.id;
  const rows = await getUserRank(Number(id));
  const userRank = (rows as RowDataPacket[])[0].english_rank.toLowerCase();
  console.log(userRank);

  let modulList = [];
  for (const item of moduls.review) {
    if (item.rank.toLowerCase() === userRank) {
      modulList = item.moduls;
      break;
    }
  }

  const buttonRows = modulList.map((modul: any) => [Keyboard.text(modul)]);
  const keyboard = Keyboard.from(buttonRows).resized();

  await ctx.reply("Mavzulardan birini tanlang", {
    reply_markup: keyboard,
  });
};

export const ReviewDictionaryGameContent = async (ctx: Context) => {
  const text: string | undefined = String(ctx.message?.text);
  const modulName = text.split(" ").join("").toLowerCase();

  const id = ctx.from?.id;
  const rows = await getUserRank(Number(id));
  const userRank = (rows as RowDataPacket[])[0].english_rank.toLowerCase();

  const content = require(`../content/${userRank}.json`);
  let count = 0;
  let data = content[modulName];

  await ctx.reply(
    `<b>${data[count].text}</b> \n\n<b>Description: </b> ${data[count].definition}`,
    {
      reply_markup: reviewInlineKeyboard,
      parse_mode: "HTML",
    }
  );
};
