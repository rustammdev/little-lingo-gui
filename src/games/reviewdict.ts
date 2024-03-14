import { Context, InlineKeyboard } from "grammy";
import { getUserRank } from "../data/get-user";
import { RowDataPacket } from "mysql2";
import { Keyboard } from "grammy";
import { games, reviewInlineKeyboard } from "../keyboards/inline";
import { Random } from "random-js";

// Interaktiv menu
import { Menu } from "@grammyjs/menu";
import { bot } from "../core/bot";

const moduls = require("../content/moduls.json");

// 1
const aboutReviewKey = new InlineKeyboard().text(
  "Boshlash",
  "start-review-about"
);
const aboutReview = async (ctx: Context) => {
  await ctx.deleteMessage();
  await ctx.reply(
    "Ushbu bo'limda siz tanlagan mavzularga doir so'zlardan tashkil topgan. \nSiz faqatgini yangi so'zlar bilan tanishib chiqishingiz mumkin. Agar tayyor bo'lsangiz boshlash tugmasini bosing",
    {
      reply_markup: aboutReviewKey,
    }
  );
};

// 2
const modulList = async (ctx: Context) => {
  const id = ctx.from?.id;
  const rows = await getUserRank(Number(id));
  let userRank = (rows as RowDataPacket[])[0].english_rank.toLowerCase();

  if (userRank === "a1-pre") {
    userRank = "a1";
  }

  let modulRank;
  const a1 = new InlineKeyboard()
    .text("Hello and goodby", "hello-goodby")
    .row()
    .text("Family", "family")
    .text("Jobs", "jobs")
    .text("Basic verbs", "basic-verbs")
    .row()
    .text("Oyinlar menusiga qaytish", "to-games");

  const a2 = new InlineKeyboard().text(
    "Home Appliances and Devices",
    "home-device"
  );

  switch (userRank) {
    case "a1":
      modulRank = a1;
      break;

    case "a2":
      modulRank = a2;
      break;
  }
  ctx.deleteMessage();
  await ctx.reply("Mavzulardan birini tanlang", {
    reply_markup: modulRank,
  });
};

// 3





export { aboutReview, modulList };
