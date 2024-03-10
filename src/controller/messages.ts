// bot
import { bot } from "../core/bot";
import { InlineKeyboard } from "grammy";

// controller
import { test } from "./commands";

bot.command("start", test);
