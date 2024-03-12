// bot
import { bot } from "../core/bot";
import { InlineKeyboard } from "grammy";

// controller
import { start } from "./commands";

bot.command("start", start);
