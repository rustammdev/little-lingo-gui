import { pool } from "./connect_db";
import { Context } from "grammy";


async function getUsers(ctx: Context) {
  try {
    const id = ctx.from?.id
    const [rows] = await pool.query(`select * from user_info where id = ${id}`);
    return rows;
  } catch (err) {
    console.log("error get Users:" + err);
  }
}

export { getUsers };
