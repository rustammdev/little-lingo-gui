import { Context } from "grammy";
import { startKeyboard } from "../keyboards/keyboard";
import { getUsers } from "../data/get-user";
import { addUserDb } from "../data/add-db";

const start = async (ctx: Context) => {
  const id = ctx.from?.id;
  const result = await getUsers(ctx);

  if (Array.isArray(result) && result.length === 0) {
    console.log("ture");

    console.log(ctx.from);
    await addUserDb(ctx)
  } else {
    console.log("else");

    console.log(ctx.from?.id);
  }
};

export { start };
