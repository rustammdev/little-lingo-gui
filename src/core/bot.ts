import { Bot } from "grammy";
import { preprocess } from "grammy/out/filter";
require("dotenv").config();


// token
const bot = new Bot(`${process.env.BOT_TOKEN}`);



export { bot };
