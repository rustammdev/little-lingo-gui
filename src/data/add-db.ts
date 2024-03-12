import { pool } from "./connect_db";
import { Context } from "grammy";

function uniqueIdGenerator(): number {
    // Bu funksiya tasodifiy raqamni generatsiya qiladi
    return Math.floor(Math.random() * 10000000000);
}

const addUserDb = (ctx: Context) => {
  const id = ctx.from?.id || uniqueIdGenerator();
  const name = ctx.from?.last_name
    ? `${ctx.from?.first_name} ${ctx.from?.last_name}`
    : ctx.from?.first_name + "";
  const link = ctx.from?.username
    ? "@" + ctx.from.username
    : "Mavjud emas" + "";

  console.log(id + " add db");

  const info = `INSERT INTO user_info (id, full_name, nick_name, user_name) VALUES (${id}, '${name.replace(
    /'/g,
    "\\'"
  )}', '${link}', '${link}')`;

  pool.query(info);
};

export { addUserDb };
