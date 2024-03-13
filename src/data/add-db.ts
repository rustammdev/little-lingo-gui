import { pool } from "./connect_db";
import { Context } from "grammy";

const addUserDb = async (ctx: Context) => {
  const id = ctx.from?.id;
  const name = ctx.from?.last_name
    ? `${ctx.from?.first_name} ${ctx.from?.last_name}`
    : ctx.from?.first_name + "";
  const link = ctx.from?.username
    ? "@" + ctx.from.username
    : "Mavjud emas" + "";

  const userInfo = `INSERT INTO user_info (id, full_name, nick_name, user_name) VALUES (?, ?, ?, ?)`;
  const lingoInfo =
    "INSERT INTO lingo_info(id, coins, english_rank, rank_position) VALUES (?, ?, ?, ?)";

  // databasega standart malumotlar qo'shilmoqda
  await pool.query(userInfo, [id, name.replace(/'/g, "\\'"), link, link]);
  await pool.query(lingoInfo, [id, 0, "Started", 0]);
};

export { addUserDb };
