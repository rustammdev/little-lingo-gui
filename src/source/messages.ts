import { bot } from "../core/bot";
import { main } from "../data/adddb";


bot.command("start", async (ctx) => {

  ctx.reply("hello");
  // main();
});
