// bot
import { bot } from "../core/bot";
import { InlineKeyboard } from "grammy";

// controller
import { startMessage } from "./commands";

bot.command("start", startMessage);

